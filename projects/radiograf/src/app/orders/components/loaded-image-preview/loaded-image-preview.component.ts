import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from '../../services/orders.service';

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
  @Input() image: any;
  @Input() idx: number = 1;
  @Output() imageUploaded = new EventEmitter<boolean>();

  urlFile: string | ArrayBuffer;
  uploaded: boolean = false;

  selectedFiles?: File[];
  progressInfo: IProgressInfo;
  message: string[] = [];
  fileInfos?: Observable<any>;

  constructor(private ordersService: OrdersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.processImage();
  }

  processImage(): void {
    if (this.image) {
      var reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = (_event) => {
        this.urlFile = reader.result;
      };
    }
  }

  removeFile(): void {}

  uploadFile(): void {
    if (this.image) {
      this.progressInfo = { value: 0, fileName: this.image.name };
      this.uploadedError = false;
      this.ordersService.uploadFileAux(this.image).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfo.value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + this.image.name;
            this.uploaded = true;
            this.imageUploaded.emit(this.uploaded);
            this.message.push(msg);
            // this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfo.value = 0;
          const msg = 'Could not upload the file: ' + this.image.name;
          this.uploaded = false;
          this.uploadedError = true;
          this.message.push(msg);
          //this.fileInfos = this.uploadService.getFiles();
        },
      });
    }
  }
}
