import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectedPiece } from '../selected-piece.interface';

@Component({
  selector: 'odo-pieces-block',
  templateUrl: './pieces-block.component.html',
  styleUrls: ['./pieces-block.component.scss'],
})
export class PiecesBlockComponent {
  @Input() block: string;
  @Output() selectedPiece = new EventEmitter<ISelectedPiece>();

  selecPiece(selectedPiece: ISelectedPiece): void {
    this.selectedPiece.emit(selectedPiece);
  }
}
