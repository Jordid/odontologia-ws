import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { IProgressInfo } from '../../../../orders/components/create-exam-form/create-exam-form.component';
import { OrdersService } from '../../../../orders/services/orders.service';
import { IFile } from '../../../../orders/types/file.interface';

@Component({
  selector: 'odo-selected-file-list-preview',
  templateUrl: './selected-file-list-preview.component.html',
  styleUrls: ['./selected-file-list-preview.component.scss'],
})
export class SelectedFileListPreviewComponent implements OnChanges {
  @Input() files: File[];
  @Input() uploadFiles: boolean;
  @Output() removedFile = new EventEmitter<File>();
  @Output() uploadedFile = new EventEmitter<IFile | null>();

  progressInfo: IProgressInfo;
  uploadedError: boolean;

  constructor(private ordersService: OrdersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.uploadFiles === true) {
      this.uploadAllFiles(this.files);
    }
  }

  onRemovedFileChange(remove: boolean, fileToDelete: File): void {
    if (remove && fileToDelete?.name) {
      this.removedFile.emit(fileToDelete);
    }
  }

  uploadAllFiles(fileList: File[]): void {
    if (fileList?.length < 1) {
      return;
    }
    for (const file of fileList) {
      this.progressInfo = { value: 0, fileName: file.name };
      this.uploadedError = false;
      this.ordersService.uploadFileAux(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfo.value = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            const array = event?.body?.result;
            if (array?.length > 0) {
              this.uploadedFile.emit(array[0]);
            }
          }
        },
        error: (err: any) => {
          this.progressInfo.value = 0;
          this.uploadedError = true;
          this.uploadedFile.emit(null);
        },
      });
    }
  }
}
