import { Component, Input } from '@angular/core';
import { ImagesConfig } from '../../../../core/utils/images-config';

@Component({
  selector: 'odo-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  ImagesConfig = ImagesConfig;
  @Input() avatarUrl: string = '';
}
