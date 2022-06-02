import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogData } from '../../../../core/types/dialogs/confirmation-dialog-data';

@Component({
  selector: 'odo-odontogram-dialog',
  templateUrl: './odontogram-dialog.component.html',
  styleUrls: ['./odontogram-dialog.component.scss'],
})
export class OdontogramDialogComponent {
  piecesCodeList: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<OdontogramDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close(this.piecesCodeList);
  }

  onPiecesCodeListChange(piecesCodeList: string[]): void {
    this.piecesCodeList = piecesCodeList;
  }

  cancel(): void {
    this.piecesCodeList = [];
    this.dialogRef.close('cancel');
  }

  add(): void {
    this.dialogRef.close(this.piecesCodeList);
  }
}
