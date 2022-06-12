import { Component, Input } from '@angular/core';
import { ImagesConfig } from '../../../../core/utils/images-config';

@Component({
  selector: 'odo-user-avatar-with-name',
  templateUrl: './user-avatar-with-name.component.html',
  styleUrls: ['./user-avatar-with-name.component.scss'],
})
export class UserAvatarWithNameComponent {
  ImagesConfig = ImagesConfig;
  @Input() avatarUrl: string = '';
  @Input() userName: string = '';
}
