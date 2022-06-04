import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectedPiece } from '../selected-piece.interface';

@Component({
  selector: 'odo-pieces-block',
  templateUrl: './pieces-block.component.html',
  styleUrls: ['./pieces-block.component.scss'],
})
export class PiecesBlockComponent {
  @Input() block: string;
  @Input() piecesCodeListInput: string[];
  @Output() piecesCodeListOutput = new EventEmitter<string[]>();
  //@Output() selectedPiece = new EventEmitter<ISelectedPiece>();

  selecPiece(selectedPiece: ISelectedPiece): void {
    this.onChangeSelectedPiece(selectedPiece);
    this.piecesCodeListOutput.emit(this.piecesCodeListInput);
    //this.selectedPiece.emit(selectedPiece);
  }

  onChangeSelectedPiece(selectedPiece: ISelectedPiece): void {
    const code = selectedPiece?.code;
    if (code) {
      const index = this.piecesCodeListInput.findIndex((i) => i == code);
      if (index != -1) {
        if (!selectedPiece?.selecetd) {
          this.piecesCodeListInput.splice(index, 1);
        }
      } else {
        this.piecesCodeListInput.push(code);
      }
    }
  }

  isSelected(pieceCode: string): boolean {
    let isSelected: boolean = false;
    if (pieceCode && this.piecesCodeListInput?.length > 0) {
      const index = this.piecesCodeListInput.findIndex((i) => i == pieceCode);
      isSelected = index != -1 ? true : false;
    }
    return isSelected;
  }
}
