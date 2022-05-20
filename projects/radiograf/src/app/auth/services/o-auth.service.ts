import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, Subject } from 'rxjs';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { OAuth } from '../types/o-auth';
import { OAuthHttpService } from './o-auth-http.service';
import { OAuthStorageService } from './o-auth-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OAuthService {
  protected readonly oAuthSubject = new Subject<OAuth>();

  constructor(
    private oAuthHttp: OAuthHttpService,
    private commonsHttp: CommonsHttpService,
    public oAuthStorage: OAuthStorageService
  ) {}

  private enableLoading(): void {
    //this.allApp.progressBar.show();
  }

  private disableLoading(): void {
    //this.allApp.progressBar.hide();
  }

  /* Login.  */
  public getOAuth$(): Observable<OAuth> {
    return this.oAuthSubject.asObservable();
  }

  public login(loginJSON: any): void {
    this.enableLoading();
    this.oAuthHttp
      .login$(loginJSON)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({ next: this.nextLogin, error: this.errorLogin });
  }

  private nextLogin = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const oAuth: OAuth = data.body.result;
      this.oAuthStorage.set(oAuth);
      this.oAuthSubject.next(oAuth);
    } else {
      this.oAuthSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorLogin = (error: HttpErrorResponse): void => {
    this.oAuthSubject.next(null);
    /* if (
      this.commonsHttp.errorsHttp.isControlledError(error) &&
      this.commonsHttp.errorsHttp.isErrorCode(
        error,
        'E0012',
        'Invalid credentials.',
        ''
      )
    ) {
      this.allApp.snackbar.open(
        OAuthSnackbars.failureLogin.message,
        OAuthSnackbars.failureLogin.closeBtn,
        OAuthSnackbars.failureLogin.config
      );
    } else if (
      this.commonsHttp.errorsHttp.isControlledError(error) &&
      this.commonsHttp.errorsHttp.isErrorCode(
        error,
        'E0020',
        'Resource is CREATED.',
        'Cuenta no validada. No se puede hacer el ingreso'
      )
    ) {
      this.messageSubject.next(error?.error?.errors[0]?.code);
    } */
    this.commonsHttp.errorsHttp.communication(error);
  };
}
