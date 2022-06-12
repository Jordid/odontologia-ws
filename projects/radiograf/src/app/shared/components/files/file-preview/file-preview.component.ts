import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmationDialogData } from '../../../../core/types/dialogs/confirmation-dialog-data';
import { OdoDialogConfig } from '../../../../core/types/dialogs/odo-dialog-config';
import { ExamPreviewDialogComponent } from '../../dialogs/exam-preview-dialog/exam-preview-dialog.component';

@Component({
  selector: 'odo-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent {
  @Input() urlFile: string;
  @Input() urlMineatureFile: string;

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
}
