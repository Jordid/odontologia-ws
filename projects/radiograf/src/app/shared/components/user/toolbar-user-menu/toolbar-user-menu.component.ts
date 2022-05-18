import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { ImagesConfig } from 'projects/radiograf/src/app/core/utils/images-config';

@Component({
  selector: 'odo-toolbar-user-menu',
  templateUrl: './toolbar-user-menu.component.html',
  styleUrls: ['./toolbar-user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarUserMenuComponent {
  @Input() avatarUrl: string = '';
  @Input() userName: string = '';
}
