import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImagesConfig } from 'projects/radiograf/src/app/core/utils/images-config';

@Component({
  selector: 'odo-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  ImagesConfig = ImagesConfig;
  @Input() avatarUrl: string = '';
}
