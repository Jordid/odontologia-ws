import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'odo-total-preview-card',
  templateUrl: './total-preview-card.component.html',
  styleUrls: ['./total-preview-card.component.scss'],
})
export class TotalPreviewCardComponent {
  @Input() title: string;
  @Input() totalValue: string;
  @Input() iconName: string;
  @Input() backgroundColor: string;
}
