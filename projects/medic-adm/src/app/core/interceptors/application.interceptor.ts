import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationHeaderEnum } from '../config/app/application-header.enum';
import { Observable } from 'rxjs';

@Injectable()
export class ApplicationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers = request.headers.set(
      'Application',
      ApplicationHeaderEnum.WEB
    );
    const authReq = request.clone({ headers });

    return next.handle(authReq);
  }
}
