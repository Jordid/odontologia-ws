import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'odo-selector-file-input',
  templateUrl: './selector-file-input.component.html',
  styleUrls: ['./selector-file-input.component.scss'],
})
export class SelectorFileInputComponent {
  @Input() messageIndicator: string;
  @Input() fileFormatsArray: string[];
  @Output() selectedFileList = new EventEmitter<File[]>();
  selectedFile: boolean = false;

  selectFiles(event): void {
    this.selectedFile = false;
    if (event?.target?.files?.length > 0) {
      this.selectedFileList.emit(event?.target?.files);
      this.selectedFile = true;
    }
  }
}
