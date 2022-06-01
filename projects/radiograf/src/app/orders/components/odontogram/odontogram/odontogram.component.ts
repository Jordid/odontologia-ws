import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'odo-odontogram',
  templateUrl: './odontogram.component.html',
  styleUrls: ['./odontogram.component.scss'],
})
export class OdontogramComponent implements OnInit {
  pieces: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addPieces(): void {
    console.log('pieces: ', this.pieces);
  }

  onChangeSelectedPieceCode(code: string): void {
    console.log('code: ', code);
  }
}
