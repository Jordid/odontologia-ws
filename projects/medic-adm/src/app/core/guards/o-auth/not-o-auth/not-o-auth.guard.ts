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
export class NotOAuthGuard implements CanActivate, CanLoad {
  private redirectTo: string[] = ['/auth/login'];

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
    if (!this.oAuthService.hasOAuth) {
      //console.log('NotOAuthGuard -> canActivate -> return true');
      return true;
    }
    // this.snackbar.open(
    //   GuardOAuthSnackbars.failNotOAuth.message,
    //   GuardOAuthSnackbars.failNotOAuth.closeBtn,
    //   GuardOAuthSnackbars.failNotOAuth.config
    // );
    //console.log('NotOAuthGuard -> canActivate -> return false');
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
    if (!this.oAuthService.hasOAuth) {
      //console.log('NotOAuthGuard -> canLoad -> return true');
      return true;
    }
    this.snackbar.open(
      GuardOAuthSnackbars.failNotOAuth.message,
      GuardOAuthSnackbars.failNotOAuth.closeBtn,
      GuardOAuthSnackbars.failNotOAuth.config
    );
    //console.log('NotOAuthGuard -> canLoad -> return false');
    this.router.navigate(this.redirectTo);
    return false;
  }
}
