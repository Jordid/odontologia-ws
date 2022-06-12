import { Component, Input } from '@angular/core';

@Component({
  selector: 'odo-toolbar-user-menu',
  templateUrl: './toolbar-user-menu.component.html',
  styleUrls: ['./toolbar-user-menu.component.scss'],
})
export class ToolbarUserMenuComponent {
  @Input() avatarUrl: string = '';
  @Input() userName: string = '';
}
