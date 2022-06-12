import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgressBarService } from '../../shared/services/progress-bar/progress-bar.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private progressBar: ProgressBarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.progressBar.setLoading(true, request.url);
    return next
      .handle(request)
      .pipe(finalize(() => this.progressBar.setLoading(false, request.url)));
    // .pipe(
    //   catchError((error) => {
    //     this.progressBar.setLoading(false, request.url);
    //     return error;
    //   })
    // )
    // .pipe(
    //   map<HttpEvent<any>, any>((event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {
    //       this.progressBar.setLoading(false, request.url);
    //     }
    //     return event;
    //   })
    // );
  }
}
