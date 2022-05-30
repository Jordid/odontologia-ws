import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'odo-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent {
  @Input() progressValue: number;
  @Input() uploadedError: boolean;
  @Output() fileList = new EventEmitter<File[]>();
  @Output() imageUploaded = new EventEmitter<boolean>();
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

  onImageUploadedChange(uploaded: boolean): void {
    this.imageUploaded.emit(uploaded);
  }
}
