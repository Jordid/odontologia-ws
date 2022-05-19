import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { finalize, Observable, Subject } from 'rxjs';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { PaginationLinks } from '../../core/types/pagination-links';
import { IMedic } from '../types/medic.interface';
import { MedicsHttpService } from './medics-http.service';
@Injectable({
  providedIn: 'root',
})
export class MedicsService {
  protected readonly medicSubject = new Subject<IMedic>();
  protected readonly medicsSubject = new Subject<IMedic[]>();
  constructor(
    private medicsHttp: MedicsHttpService,
    private commonsHttp: CommonsHttpService
  ) {}
  protected readonly paginationLinksSubject = new Subject<PaginationLinks>();

  private enableLoading(): void {
    //this.allApp.progressBar.show();
  }

  private disableLoading(): void {
    //this.allApp.prog/ressBar.hide();
  }

  // Pagination Links
  // ==========================================================================================

  public getPaginationLinks$(): Observable<PaginationLinks> {
    return this.paginationLinksSubject.asObservable();
  }

  // ==========================================================================================
  // Register User
  // ==========================================================================================

  public getMedic$(): Observable<IMedic> {
    return this.medicSubject.asObservable();
  }

  public createMedic(medic: IMedic): void {
    this.enableLoading();
    this.medicsHttp
      .createMedic$(medic)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({ next: this.nextRegister, error: this.errorRegister });
  }

  private nextRegister = (data: HttpResponse<any>): void => {
    console.log('medic response: ', data);

    if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const medic: IMedic = data.body.result[0];
      this.medicSubject.next(medic);
    } else {
      this.medicSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorRegister = (error: HttpErrorResponse): void => {
    this.medicSubject.next(null);
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
    }*/
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get medics. */
  public getMedics$(): Observable<IMedic[]> {
    return this.medicsSubject.asObservable();
  }

  public getMedics(params?: Params): void {
    /*  if (this.oAuthStorage.hasOAuth) { */
    this.medicsHttp.getMedics$(params).subscribe({
      next: this.nextGeMedics,
      error: this.errorGetMedics,
    });
    /* } */
  }

  private nextGeMedics = (data: HttpResponse<any>): void => {
    console.log('get medics data: ', data);
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const medics: IMedic[] = data.body.result;
      const paginationLinks: PaginationLinks = data.body.links;
      this.medicsSubject.next(medics);
      this.paginationLinksSubject.next(paginationLinks);
    } else {
      this.medicsSubject.next(null);
      this.paginationLinksSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetMedics = (error: HttpErrorResponse): void => {
    this.medicsSubject.next(null);
    this.paginationLinksSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };
}
