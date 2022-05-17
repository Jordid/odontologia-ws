import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { finalize, Observable, Subject } from 'rxjs';
import { MedicsHttpService } from './medics-http.service';
@Injectable({
  providedIn: 'root'
})
export class MedicsService {

  protected readonly medicSubject = new Subject<any>();
  constructor(private medicsHttp: MedicsHttpService) { }

  private enableLoading(): void {
    //this.allApp.progressBar.show();
  }

  private disableLoading(): void {
    //this.allApp.prog/ressBar.hide();
  }

  // ==========================================================================================
  // Register User
  // ==========================================================================================

  public getMedic$(): Observable<any> {
    return this.medicSubject.asObservable();
  }

  public createMedic(medic: any): void {
    this.enableLoading();
    this.medicsHttp
      .createMedic$(medic)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({ next: this.nextRegister, error: this.errorRegister });
  }

  private nextRegister = (data: HttpResponse<any>): void => {
    console.log("medic response: ", data);

   /*  if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const user: User = data.body.result[0];
      this.userSubject.next(user);
      this.allApp.snackbar.open(
        OAuthSnackbars.successRegister.message,
        OAuthSnackbars.successRegister.closeBtn,
        OAuthSnackbars.successRegister.config
      );
    } else {
      this.userSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    } */
  }

  private errorRegister = (error: HttpErrorResponse): void => {
    //this.userSubject.next(null);
    /* if (
      this.commonsHttp.errorsHttp.isControlledError(error) &&
      this.commonsHttp.errorsHttp.isErrorCode(
        error,
        'E0004',
        'A required field is missing.',
        'The email has already been taken.'
      )
    ) {
      this.allApp.snackbar.open(
        OAuthSnackbars.failureRegisterEmailExists.message,
        OAuthSnackbars.failureRegisterEmailExists.closeBtn,
        OAuthSnackbars.failureRegisterEmailExists.config
      );
    } else if (
      this.commonsHttp.errorsHttp.isControlledError(error) &&
      this.commonsHttp.errorsHttp.isErrorCode(
        error,
        'E0004',
        'A required field is missing.',
        'The phone has already been taken.'
      )
    ) {
      this.allApp.snackbar.open(
        OAuthSnackbars.failureRegisterPhoneExists.message,
        OAuthSnackbars.failureRegisterPhoneExists.closeBtn,
        OAuthSnackbars.failureRegisterPhoneExists.config
      );
    } else if (
      this.commonsHttp.errorsHttp.isControlledError(error) &&
      this.commonsHttp.errorsHttp.isErrorCode(
        error,
        'E0004',
        'A required field is missing.',
        'The nif has already been taken.'
      )
    ) {
      this.allApp.snackbar.open(
        OAuthSnackbars.failureRegisterNIFExists.message,
        OAuthSnackbars.failureRegisterNIFExists.closeBtn,
        OAuthSnackbars.failureRegisterNIFExists.config
      );
    } else if (
      this.commonsHttp.errorsHttp.isControlledError(error) &&
      this.commonsHttp.errorsHttp.isErrorCode(
        error,
        'E0004',
        'A required field is missing.',
        ''
      )
    ) {
      this.allApp.snackbar.open(
        OAuthSnackbars.failureRegisterExists.message,
        OAuthSnackbars.failureRegisterExists.closeBtn,
        OAuthSnackbars.failureRegisterExists.config
      );
    } */
    //this.commonsHttp.errorsHttp.communication(error);
  }

}
