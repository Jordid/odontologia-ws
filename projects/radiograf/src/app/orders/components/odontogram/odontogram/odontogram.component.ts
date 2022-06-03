import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'odo-odontogram',
  templateUrl: './odontogram.component.html',
  styleUrls: ['./odontogram.component.scss'],
})
export class OdontogramComponent {
  @Input() piecesCodeListInput: string[];
  @Output() piecesCodeListOutput = new EventEmitter<string[]>();
  piecesCodes: string[] = [];

  onChangePiecesCodeListOutput(piecesCodeListOutput: string[]): void {
    this.piecesCodeListOutput.emit(piecesCodeListOutput);
  }
}
