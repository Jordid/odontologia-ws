import { Component, EventEmitter, Output } from '@angular/core';
import { ISelectedPiece } from '../selected-piece.interface';
@Component({
  selector: 'odo-odontogram',
  templateUrl: './odontogram.component.html',
  styleUrls: ['./odontogram.component.scss'],
})
export class OdontogramComponent {
  @Output() piecesCodeList = new EventEmitter<string[]>();
  piecesCodes: string[] = [];

  onChangeSelectedPiece(selectedPiece: ISelectedPiece): void {
    const code = selectedPiece?.code;
    if (code) {
      const index = this.piecesCodes.findIndex((i) => i == code);
      if (index != -1) {
        if (!selectedPiece?.selecetd) {
          this.piecesCodes.splice(index, 1);
        }
      } else {
        this.piecesCodes.push(code);
      }
    }
    this.piecesCodeList.emit(this.piecesCodes);
  }
}
