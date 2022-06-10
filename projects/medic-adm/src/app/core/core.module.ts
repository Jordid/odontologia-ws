import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OAuthInterceptor } from './interceptors/o-auth.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ManageErrorsInterceptor } from './interceptors/manage-errors.interceptor';
import { ApplicationInterceptor } from './interceptors/application.interceptor';
import { AppCodeInterceptor } from './interceptors/app-code.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule],
  exports: [HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: OAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManageErrorsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplicationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppCodeInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
