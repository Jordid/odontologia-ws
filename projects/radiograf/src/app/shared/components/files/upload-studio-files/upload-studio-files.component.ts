import {
  Component,
  EventEmitter,
  Input, Output
} from '@angular/core';

@Component({
  selector: 'odo-upload-studio-files',
  templateUrl: './upload-studio-files.component.html',
  styleUrls: ['./upload-studio-files.component.scss'],
})
export class UploadStudioFilesComponent {
  @Input() uploadFiles: boolean;
  @Output() selectedFilesOut = new EventEmitter<File[]>();
  imgStudiofileFormatsArray = ['.jpg', '.png'];
  htmlStudiofileFormatsArray = ['.html'];
  selectedFiles: File[] = [];

  onSelectedImgFileListChange(files: any): void {
    this.addFilesToList(files);
  }

  onSelectedHtmlFileListChange(files: any): void {
    this.addFilesToList(files);
  }

  addFilesToList(files: File[]): void {
    if (files?.length > 0) {
      for (const file of files) {
        this.selectedFiles.push(file);
        this.selectedFilesOut.emit(this.selectedFiles);
      }
    }
  }

  onRemovedFileChange(fileToDelete: File): void {
    if (fileToDelete?.name && this.selectedFiles?.length > 0) {
      const indexFile: number = this.selectedFiles.findIndex(
        (e) => e.name === fileToDelete?.name
      );
      if (indexFile >= 0) {
        this.selectedFiles.splice(indexFile, 1);
        this.selectedFilesOut.emit(this.selectedFiles);
      }
    }
  }

  showImageSelector(): boolean {
    return !this.arrayContainerFileByExtension(['jpg', 'png']);
  }
  showHtmlSelector(): boolean {
    return !this.arrayContainerFileByExtension(['html']);
  }

  arrayContainerFileByExtension(extensions: string[]): boolean {
    let exist: boolean = false;
    if (this.selectedFiles?.length && extensions?.length > 0) {
      for (const file of this.selectedFiles) {
        const fileName = file.name;
        if (fileName && file.name.includes('.')) {
          const array = file.name.split('.');
          if (array?.length > 0) {
            const fileExtension = array[array.length - 1];
            if (extensions.includes(fileExtension)) {
              exist = true;
              break;
            }
          }
        }
      }
    } else {
      exist = false;
    }
    return exist;
  }
}
