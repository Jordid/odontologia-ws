import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthInitComponent } from './components/auth-init/auth-init.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AuthInitComponent,
    LoginComponent
  ],
  imports: [CommonModule, AuthRoutingModule, LayoutModule],
})
export class AuthModule {}
