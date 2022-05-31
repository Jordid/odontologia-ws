import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

export interface IProgressInfo {
  value: any;
  fileName: string;
}

@Component({
  selector: 'odo-loaded-image-preview',
  templateUrl: './loaded-image-preview.component.html',
  styleUrls: ['./loaded-image-preview.component.scss'],
})
export class LoadedImagePreviewComponent implements OnChanges {
  @Input() progressValue: number;
  @Input() uploadedError: boolean;
  @Input() file: File;
  @Output() removedFile = new EventEmitter<boolean>();
  @Output() imageUploaded = new EventEmitter<boolean>();

  urlFile: string | ArrayBuffer;
  uploaded: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.processFile();
  }

  processFile(): void {
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
        this.urlFile = reader.result;
      };
    }
  }

  removeFile(): void {
    this.removedFile.emit(true);
  }
}
