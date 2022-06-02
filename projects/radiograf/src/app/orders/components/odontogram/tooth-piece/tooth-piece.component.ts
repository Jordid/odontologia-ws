import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ISelectedPiece } from '../selected-piece.interface';

@Component({
  selector: 'odo-tooth-piece',
  templateUrl: './tooth-piece.component.html',
  styleUrls: ['./tooth-piece.component.scss'],
})
export class ToothPieceComponent {
  @Input() toothCode: string;
  @Output() selectedPiece = new EventEmitter<ISelectedPiece>();

  selecPiece(matCheckboxChange: MatCheckboxChange): void {
    const selectedPiece: ISelectedPiece = {
      code: this.toothCode,
      selecetd: matCheckboxChange?.checked,
    };
    this.selectedPiece.emit(selectedPiece);
  }
}
