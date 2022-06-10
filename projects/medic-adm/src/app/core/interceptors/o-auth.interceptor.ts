import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OAuthStorageService } from '../../auth/services/o-auth-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OAuthInterceptor implements HttpInterceptor {
  constructor(private oAuthStorage: OAuthStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.oAuthStorage.hasOAuth) {
      return next.handle(request);
    }

    const headers = request.headers.set(
      'Authorization',
      'Bearer ' + this.oAuthStorage.get().token
    );
    const req = request.clone({ headers });

    return next.handle(req);
  }
}
