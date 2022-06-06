import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogData } from '../../../../core/types/dialogs/confirmation-dialog-data';
import { OdontogramDialogComponent } from '../../../../orders/components/odontogram/odontogram-dialog/odontogram-dialog.component';
import { IExam } from '../../../../orders/types/exam.interface';

@Component({
  selector: 'odo-exam-preview-dialog',
  templateUrl: './exam-preview-dialog.component.html',
  styleUrls: ['./exam-preview-dialog.component.scss'],
})
export class ExamPreviewDialogComponent implements OnInit {
  exam: IExam;

  constructor(
    public dialogRef: MatDialogRef<OdontogramDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {}

  ngOnInit(): void {
    this.exam = this.data?.data;
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  accept(): void {
    this.dialogRef.close(null);
  }
}
