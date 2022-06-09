import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogData } from '../../../../core/types/dialogs/confirmation-dialog-data';

export interface IOdontrogramDialogData {
  piecesCodeList: string[];
}

@Component({
  selector: 'odo-odontogram-dialog',
  templateUrl: './odontogram-dialog.component.html',
  styleUrls: ['./odontogram-dialog.component.scss'],
})
export class OdontogramDialogComponent implements OnInit {
  piecesCodeListOriginal: string[];
  piecesCodeList: string[];

  constructor(
    public dialogRef: MatDialogRef<OdontogramDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {}

  ngOnInit(): void {
    this.piecesCodeListOriginal = this.data?.data;
    this.piecesCodeList = JSON.parse(JSON.stringify(this.piecesCodeListOriginal));
  }

  onChangePiecesCodeListOutput(piecesCodeListOutput: string[]): void {
    this.piecesCodeList = piecesCodeListOutput;
  }

  cancel(): void {
    this.dialogRef.close(this.piecesCodeListOriginal);
  }

  add(): void {
    this.dialogRef.close(this.piecesCodeList);
  }
}
