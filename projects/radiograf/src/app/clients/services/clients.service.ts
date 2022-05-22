import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, Subject } from 'rxjs';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { ClientsHttpService } from './clients-http.service';
import { PaginationLinks } from '../../core/types/pagination-links';
import { IClient } from '../types/client.interface';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  protected readonly clientSubject = new Subject<IClient>();
  protected readonly clientsSubject = new Subject<IClient[]>();
  protected readonly deletedClientSubject = new Subject<boolean>();
  constructor(
    private clientsHttp: ClientsHttpService,
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

  public createClient(client: IClient): void {
    this.enableLoading();
    this.clientsHttp
      .createClient$(client)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({ next: this.nextRegister, error: this.errorRegister });
  }

  private nextRegister = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const client: IClient = data.body.result[0];
      this.clientSubject.next(client);
    } else {
      this.clientSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorRegister = (error: HttpErrorResponse): void => {
    this.clientSubject.next(null);
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

  /* Get Client */
  public getClient$(): Observable<IClient> {
    return this.clientSubject.asObservable();
  }

  public getClientc(clientId: number): void {
    /*  if (this.oAuthStorage.hasOAuth) { */
    this.clientsHttp.getClient$(clientId).subscribe({
      next: this.nextGetClient,
      error: this.errorGetClient,
    });
    /* } */
  }

  private nextGetClient = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const client: IClient = data.body.result[0];
      this.clientSubject.next(client);
    } else {
      this.clientSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetClient = (error: HttpErrorResponse): void => {
    this.clientSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get clients. */
  public getClients$(): Observable<IClient[]> {
    return this.clientsSubject.asObservable();
  }

  public getClients(params?: Params): void {
    /*  if (this.oAuthStorage.hasOAuth) { */
    this.clientsHttp.getClients$(params).subscribe({
      next: this.nextGetClients,
      error: this.errorGetClients,
    });
    /* } */
  }

  private nextGetClients = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const client: IClient[] = data.body.result;
      const paginationLinks: PaginationLinks = data.body.links;
      this.clientsSubject.next(client);
      this.paginationLinksSubject.next(paginationLinks);
    } else {
      this.clientsSubject.next(null);
      this.paginationLinksSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetClients = (error: HttpErrorResponse): void => {
    this.clientsSubject.next(null);
    this.paginationLinksSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  public updateClient(clientId: number, client: IClient): void {
    this.enableLoading();
    this.clientsHttp
      .updateClient$(clientId, client)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({
        next: this.nextUpdateClient,
        error: this.errorUpdateClient,
      });
  }

  private nextUpdateClient = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const client: IClient = data.body.result[0];
      this.clientSubject.next(client);
    } else {
      this.clientSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorUpdateClient = (error: HttpErrorResponse): void => {
    this.clientSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Delete Client */
  public getDeletedClient$(): Observable<boolean> {
    return this.deletedClientSubject.asObservable();
  }

  public deleteClient(clientId: number): void {
    this.clientsHttp.deleteClient$(clientId).subscribe({
      next: this.nextDeleteClient,
      error: this.errorDeleteClient,
    });
  }

  private nextDeleteClient = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus204(data)) {
      this.deletedClientSubject.next(true);
    } else {
      this.deletedClientSubject.next(false);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorDeleteClient = (error: HttpErrorResponse): void => {
    this.deletedClientSubject.next(false);
    this.commonsHttp.errorsHttp.communication(error);
  };
}
