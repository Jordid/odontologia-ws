import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, Subject } from 'rxjs';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { ProgressBarService } from '../../shared/services/progress-bar/progress-bar.service';
import { OAuth } from '../types/o-auth';
import { OAuthHttpService } from './o-auth-http.service';
import { OAuthSnackbarsService } from './o-auth-snackbars.service';
import { OAuthStorageService } from './o-auth-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OAuthService {
  protected readonly oAuthSubject = new Subject<OAuth>();

  constructor(
    private progressBarService: ProgressBarService,
    private oAuthHttp: OAuthHttpService,
    private commonsHttp: CommonsHttpService,
    public oAuthStorage: OAuthStorageService,
    private snackbars: OAuthSnackbarsService
  ) {}

  private enableLoading(): void {
    this.progressBarService.show();
  }

  private disableLoading(): void {
    this.progressBarService.hide();
  }

  get hasOAuth(): boolean {
    return this.oAuthStorage.hasOAuth;
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
    if (this.commonsHttp.errorsHttp.isControlledError(error, 'E0012')) {
      this.snackbars.failureLoginInvalidCredentials();
    } else {
      this.snackbars.genericLoginError();
    }
    this.commonsHttp.errorsHttp.communication(error);
  };
}
