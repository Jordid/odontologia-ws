import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'odo-tooth-piece',
  templateUrl: './tooth-piece.component.html',
  styleUrls: ['./tooth-piece.component.scss'],
})
export class ToothPieceComponent implements OnInit {
  @Input() toothCode: string;
  constructor() {}

  ngOnInit(): void {}
}
