import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'odo-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent {
  @Input() submitting: boolean;
  @Input() progressValue: number;
  @Input() uploadedError: boolean;
  @Input() fileFormatsArray: string[];
  @Output() fileList = new EventEmitter<File[]>();
  @Output() removedFile = new EventEmitter<boolean>();

  selectedImagesList: File[] = [];
  selectedFile: boolean = false;

  selectFiles(event): void {
    this.selectedFile = false;
    this.selectedImagesList = event.target.files;
    if (event?.target?.files?.length > 0) {
      this.fileList.emit(event.target.files);
      this.selectedFile = true;
    }
  }

  onRemovedFileChange(removed: boolean): void {
    if (removed) {
      this.selectedFile = false;
      this.selectedImagesList = [];
      this.fileList.emit(null);
    }
  }
}
