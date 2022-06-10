import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
//import { QaroniDialogConfig } from '@qaroni-core/types/dialogs/qaroni-dialog-config';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ManageErrorsInterceptor implements HttpInterceptor {
  private disabledRegExpRoutes: RegExp[] = [
    /\/login/i,
    /\/validate/i,
    /\/invitations\/\d+\/accepts/i,
    /\/invitations\/\d+\/rejects/i,
  ];

  constructor(/*private dialog: MatDialog*/) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let errorInfo: HttpErrorResponse = null;

    return next.handle(req).pipe(
      tap(
        () => {},
        (error) => {
          if (error instanceof HttpErrorResponse) {
            errorInfo = error;
          }
        }
      ),
      finalize(() => {
        if (errorInfo !== null) {
          console.error('INTERCEPTOR', errorInfo);

          if (
            !this.errorIsTokenInvalid(errorInfo.status) &&
            !this.urlBelongsToDisabledRegExpRoutes(req.url)
          ) {
            //const dialogConfig = new QaroniDialogConfig<HttpErrorResponse>();
            //dialogConfig.data = errorInfo;
            //this.dialog.open(ErrorsHttpDialogComponent, dialogConfig);
          }
        }
      })
    );
  }

  private errorIsTokenInvalid(status: number): boolean {
    if (status === 401 || status === 403) {
      return true;
    } else {
      return false;
    }
  }

  private urlBelongsToDisabledRegExpRoutes(url: string): boolean {
    let belong = false;

    for (const regExpRoute of this.disabledRegExpRoutes) {
      if (regExpRoute.test(url)) {
        belong = true;
        break;
      }
    }

    return belong;
  }
}
