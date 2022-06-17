import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OAuthSnackbars } from '../types/o-auth-snackbars.config';

@Injectable({
  providedIn: 'root',
})
export class OAuthSnackbarsService {
  constructor(private snackbar: MatSnackBar) {}

  public failureLoginInvalidCredentials(): void {
    this.snackbar.open(
      OAuthSnackbars.failureLoginInvalidCredentials.message,
      OAuthSnackbars.failureLoginInvalidCredentials.closeBtn,
      OAuthSnackbars.failureLoginInvalidCredentials.config
    );
  }
  public genericLoginError(): void {
    this.snackbar.open(
      OAuthSnackbars.genericLoginError.message,
      OAuthSnackbars.genericLoginError.closeBtn,
      OAuthSnackbars.genericLoginError.config
    );
  }
}
