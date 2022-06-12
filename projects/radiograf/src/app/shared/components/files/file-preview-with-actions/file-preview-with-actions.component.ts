import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmationDialogData } from '../../../../core/types/dialogs/confirmation-dialog-data';
import { OdoDialogConfig } from '../../../../core/types/dialogs/odo-dialog-config';
import { ExamPreviewDialogComponent } from '../../dialogs/exam-preview-dialog/exam-preview-dialog.component';

@Component({
  selector: 'odo-file-preview-with-actions',
  templateUrl: './file-preview-with-actions.component.html',
  styleUrls: ['./file-preview-with-actions.component.scss'],
})
export class FilePreviewWithActionsComponent {
  @Input() urlFile: string;
  @Input() urlMineatureFile: string;
  @Output() goToEditorClicked = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) {}

  private subs: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  showPreview(): void {
    const data: ConfirmationDialogData = {
      data: this.urlFile,
    };
    const dialogConfig = new OdoDialogConfig<ConfirmationDialogData>();
    dialogConfig.data = data;
    dialogConfig.width = '750px';

    this.dialog.open<
      ExamPreviewDialogComponent,
      ConfirmationDialogData,
      string[]
    >(ExamPreviewDialogComponent, dialogConfig);
  }

  gotToEditor(): void {
    this.goToEditorClicked.emit(true);
  }
}
