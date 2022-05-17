import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInitComponent } from './components/auth-init/auth-init.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
/* import { NotOAuthGuard } from '@qaroni-core/guards/o-auth/not-o-auth/not-o-auth.guard';
import { OAuthGuard } from '@qaroni-core/guards/o-auth/o-auth/o-auth.guard';
import { AuthGoogleComponent } from './components/auth-google/auth-google.component'; */
//import { AuthInitComponent } from './components/auth-init/auth-init.component';
//import { ForgotSuccessComponent } from './components/forgot-success/forgot-success.component';
//import { LoginComponent } from './components/login/login.component';
/* import { LogoutComponent } from './components/logout/logout.component';
import { MagicLinkSuccessComponent } from './components/magic-link-success/magic-link-success.component';
import { MagicLinkComponent } from './components/magic-link/magic-link.component';
import { PasswordComponent } from './components/password/password.component';
import { SignUpSuccessComponent } from './components/sign-up-success/sign-up-success.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ValidateForgotComponent } from './components/validate-forgot/validate-forgot.component';
import { ValidateRegisterComponent } from './components/validate-register/validate-register.component';
 */
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
      /* {
        path: 'password',
        component: PasswordComponent,
        canActivate: [NotOAuthGuard],
      },*/
      {
        path: 'sign-up',
        component: SignUpComponent,
        //canActivate: [NotOAuthGuard],
      },
     /* {
        path: 'sign-up/success',
        component: SignUpSuccessComponent,
        canActivate: [NotOAuthGuard],
      },
      {
        path: 'validate/:userID/:otp',
        component: ValidateRegisterComponent,
        canActivate: [NotOAuthGuard],
      },
      {
        path: 'accounts/:userID/:otp',
        component: ValidateForgotComponent,
        canActivate: [NotOAuthGuard],
      },
      {
        path: 'forgot/success',
        component: ForgotSuccessComponent,
        canActivate: [NotOAuthGuard],
      },
      {
        path: 'magics',
        component: MagicLinkComponent,
        canActivate: [NotOAuthGuard],
      },
      {
        path: 'magics/success',
        component: MagicLinkSuccessComponent,
        canActivate: [NotOAuthGuard],
      },
      {
        path: 'google',
        component: AuthGoogleComponent,
        canActivate: [NotOAuthGuard],
      },*/
      { path: 'logout', component: LogoutComponent, /*canActivate: [OAuthGuard]*/ },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
