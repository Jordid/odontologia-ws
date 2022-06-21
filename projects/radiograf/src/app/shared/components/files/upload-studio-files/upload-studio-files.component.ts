import { Component } from '@angular/core';

@Component({
  selector: 'odo-upload-studio-files',
  templateUrl: './upload-studio-files.component.html',
  styleUrls: ['./upload-studio-files.component.scss'],
})
export class UploadStudioFilesComponent {
  imgStudiofileFormatsArray = ['.jpg', '.png'];
  htmlStudiofileFormatsArray = ['.html'];
}
