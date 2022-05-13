import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'odo-user-avatar-with-name',
  templateUrl: './user-avatar-with-name.component.html',
  styleUrls: ['./user-avatar-with-name.component.scss'],
})
export class UserAvatarWithNameComponent {
  @Input() avatarUrl: string = '';
  @Input() userName: string = '';
}
