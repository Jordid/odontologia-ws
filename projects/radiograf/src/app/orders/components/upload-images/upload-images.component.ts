import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'odo-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit {

  selectedFiles?: FileList;
  selectedImagesList: any[] = [];
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;
  urlFile: any;
  constructor(/*private uploadService: FileUploadService*/) { }


  ngOnInit(): void {
  }

  selectFiles(event): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.selectedImagesList = event.target.files;

    var reader = new FileReader();


    reader.readAsDataURL(this.selectedFiles[0]);
    reader.onload = (_event) => {
      console.log();
      console.log("reader: ", reader);
      this.urlFile = reader.result
    }

  }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        console.log("file: ", this.selectedFiles[i]);

        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      /*this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        }
      });*/
    }
  }

}
