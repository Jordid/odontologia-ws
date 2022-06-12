import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppEnv } from '../../core/config/app/app.config';
import { Observable } from 'rxjs';

@Injectable()
export class AppCodeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!AppEnv.appCode) {
      return next.handle(request);
    }

    const headers = request.headers.set('App-Code', AppEnv.appCode);
    const req = request.clone({ headers });

    return next.handle(req);
  }
}
