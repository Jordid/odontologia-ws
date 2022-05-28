import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'odo-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent {
  @Output() imageUploaded = new EventEmitter<boolean>();
  selectedImagesList: FileList[] = [];

  selectFiles(event): void {
    this.selectedImagesList = event.target.files;
  }

  onImageUploadedChange(uploaded: boolean): void {
    this.imageUploaded.emit(uploaded);
  }

}
