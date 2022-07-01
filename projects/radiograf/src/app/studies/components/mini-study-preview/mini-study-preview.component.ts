import { Component, Input } from '@angular/core';

@Component({
  selector: 'odo-mini-study-preview',
  templateUrl: './mini-study-preview.component.html',
  styleUrls: ['./mini-study-preview.component.scss'],
})
export class MiniStudyPreviewComponent {
  @Input() url: string = '';
}
