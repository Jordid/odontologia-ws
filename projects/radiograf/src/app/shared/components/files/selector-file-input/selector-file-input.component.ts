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

  selectFiles(event): void {
    if (event?.target?.files?.length > 0) {
      this.selectedFileList.emit(event?.target?.files);
    }
  }
}
