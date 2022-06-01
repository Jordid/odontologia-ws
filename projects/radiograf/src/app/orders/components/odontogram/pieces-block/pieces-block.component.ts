import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectedPiece } from '../molar-piece/molar-piece.component';

@Component({
  selector: 'odo-pieces-block',
  templateUrl: './pieces-block.component.html',
  styleUrls: ['./pieces-block.component.scss'],
})
export class PiecesBlockComponent implements OnInit {
  @Input() block: string;
  @Output() pieceCode = new EventEmitter<string>();

  piecesCodeList: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  selecPiece(selectedPiece: ISelectedPiece): void {
    const code = selectedPiece?.code;
    if (code) {
      const index = this.piecesCodeList.findIndex((i) => i == code);
      if (index != -1) {
        if (!selectedPiece?.selecetd) {
          this.piecesCodeList.splice(index, 1);
        }
      } else {
        this.piecesCodeList.push(code);
      }
    }
    console.log('piecesCodeList: ', this.piecesCodeList);
  }
}
