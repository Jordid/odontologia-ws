import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ISelectedPiece } from '../selected-piece.interface';

@Component({
  selector: 'odo-molar-piece',
  templateUrl: './molar-piece.component.html',
  styleUrls: ['./molar-piece.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MolarPieceComponent {
  @Input() molarCode: string;
  @Output() selectedPiece = new EventEmitter<ISelectedPiece>();

  selecPiece(matCheckboxChange: MatCheckboxChange): void {
    const selectedPiece: ISelectedPiece = {
      code: this.molarCode,
      selecetd: matCheckboxChange?.checked,
    };
    this.selectedPiece.emit(selectedPiece);
  }
}
