import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotOAuthGuard } from '../core/guards/o-auth/not-o-auth/not-o-auth.guard';
import { OAuthGuard } from '../core/guards/o-auth/o-auth/o-auth.guard';
import { AuthInitComponent } from './components/auth-init/auth-init.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthInitComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        component: LoginComponent,
        //canActivate: [NotOAuthGuard],
      },

      { path: 'logout', component: LogoutComponent, canActivate: [OAuthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
