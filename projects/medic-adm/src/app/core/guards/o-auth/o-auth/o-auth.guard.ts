import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { OAuthService } from '../../../../auth/services/o-auth.service';
import { Observable } from 'rxjs';
import { GuardOAuthSnackbars } from '../snackbars/guard-o-auth-snackbars.config';

@Injectable({
  providedIn: 'root',
})
export class OAuthGuard implements CanActivate, CanLoad {
  private redirectTo: string[] = ['/'];

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private oAuthService: OAuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.oAuthService.hasOAuth) {
      // console.log('OAuthGuard -> canActivate -> return true');
      return true;
    }
    this.snackbar.open(
      GuardOAuthSnackbars.failOAuth.message,
      GuardOAuthSnackbars.failOAuth.closeBtn,
      GuardOAuthSnackbars.failOAuth.config
    );
    // console.log('OAuthGuard -> canActivate -> return false');
    this.router.navigate(this.redirectTo);
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.oAuthService.hasOAuth) {
      // console.log('OAuthGuard -> canLoad -> return true');
      return true;
    }
    this.snackbar.open(
      GuardOAuthSnackbars.failOAuth.message,
      GuardOAuthSnackbars.failOAuth.closeBtn,
      GuardOAuthSnackbars.failOAuth.config
    );
    // console.log('OAuthGuard -> canLoad -> return false');
    this.router.navigate(this.redirectTo);
    return false;
  }
}
