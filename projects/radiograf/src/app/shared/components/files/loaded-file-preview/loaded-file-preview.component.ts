import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'odo-loaded-file-preview',
  templateUrl: './loaded-file-preview.component.html',
  styleUrls: ['./loaded-file-preview.component.scss']
})
export class LoadedFilePreviewComponent  implements OnChanges {
  @Input() progressValue: number;
  @Input() uploadedError: boolean;
  @Input() file: File;
  @Output() removedFile = new EventEmitter<boolean>();

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
