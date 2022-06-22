import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'odo-selected-file-list-preview',
  templateUrl: './selected-file-list-preview.component.html',
  styleUrls: ['./selected-file-list-preview.component.scss'],
})
export class SelectedFileListPreviewComponent {
  @Input() files: File[];
  @Input() progressValue: number;
  @Input() uploadedError: boolean;
  @Output() removedFile = new EventEmitter<File>();

  onRemovedFileChange(remove: boolean, fileToDelete: File): void {
    if (remove && fileToDelete?.name) {
      this.removedFile.emit(fileToDelete);
    }
  }
}
