import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserAvatarWithNameComponent } from './user-avatar-with-name/user-avatar-with-name.component';

@NgModule({
  declarations: [UserAvatarWithNameComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [UserAvatarWithNameComponent],
})
export class UserModule {}
