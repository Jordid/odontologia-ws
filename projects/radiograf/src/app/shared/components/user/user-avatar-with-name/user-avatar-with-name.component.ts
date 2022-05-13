import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'odo-user-avatar-with-name',
  templateUrl: './user-avatar-with-name.component.html',
  styleUrls: ['./user-avatar-with-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAvatarWithNameComponent {
  @Input() avatarUrl: string = '';
  @Input() userName: string = '';
}
