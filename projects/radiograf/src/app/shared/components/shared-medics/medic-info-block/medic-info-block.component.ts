import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'odo-medic-info-block',
  templateUrl: './medic-info-block.component.html',
  styleUrls: ['./medic-info-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicInfoBlockComponent {
  @Input() avatarUrl: string = '';
  @Input() names: string = '';
  @Input() email: string = '';
}
