import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { ToolbarUserMenuComponent } from './toolbar-user-menu/toolbar-user-menu.component';
import { UserAvatarWithNameComponent } from './user-avatar-with-name/user-avatar-with-name.component';
@NgModule({
  declarations: [
    UserAvatarWithNameComponent,
    ToolbarUserMenuComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [
    UserAvatarWithNameComponent,
    ToolbarUserMenuComponent,
    AvatarComponent,
  ],
})
export class UserModule {}
