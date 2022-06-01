import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

export interface ISelectedPiece {
  code: string;
  selecetd: boolean;
}

@Component({
  selector: 'odo-molar-piece',
  templateUrl: './molar-piece.component.html',
  styleUrls: ['./molar-piece.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MolarPieceComponent implements OnInit {
  @Input() molarCode: string;
  @Output() selectedPiece = new EventEmitter<ISelectedPiece>();

  constructor() {}

  ngOnInit(): void {}

  selecPiece(value: any): void {
    const selectedPiece: ISelectedPiece = {
      code: this.molarCode,
      selecetd: value?.checked,
    };
    this.selectedPiece.emit(selectedPiece);
  }
}
