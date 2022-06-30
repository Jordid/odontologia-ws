import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { finalize, Observable, Subject } from 'rxjs';
import { OAuthStorageService } from '../../auth/services/o-auth-storage.service';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { PaginationLinks } from '../../core/types/pagination-links';
import { ProgressBarService } from '../../shared/services/progress-bar/progress-bar.service';
import { IStudy } from '../types/study.interface';
import { StudiesHttpService } from './studies-http.service';

@Injectable({
  providedIn: 'root',
})
export class StudiesService {
  protected readonly studiesSubject = new Subject<IStudy[]>();
  protected readonly paginationLinksSubject = new Subject<PaginationLinks>();

  constructor(
    private oAuthStorage: OAuthStorageService,
    private progressBarService: ProgressBarService,
    private commonsHttp: CommonsHttpService,
    private studiesHttp: StudiesHttpService
  ) {}

  private enableLoading(): void {
    this.progressBarService.show();
  }

  private disableLoading(): void {
    this.progressBarService.hide();
  }

  // Pagination Links
  // ==========================================================================================

  public getPaginationLinks$(): Observable<PaginationLinks> {
    return this.paginationLinksSubject.asObservable();
  }

  /* Get Studies. */
  public getStudies$(): Observable<IStudy[]> {
    return this.studiesSubject.asObservable();
  }

  public getStudies(
    orderId: number | string,
    examId: number | string,
    params?: Params
  ): void {
    if (this.oAuthStorage.hasOAuth) {
      this.enableLoading();
      this.studiesHttp
        .getStudies$(orderId, examId, params)
        .pipe(finalize(() => this.disableLoading()))
        .subscribe({
          next: this.nextGetStudies,
          error: this.errorGetStudies,
        });
    }
  }

  private nextGetStudies = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const studies: IStudy[] = data.body.result;
      const paginationLinks: PaginationLinks = data.body.links;
      this.studiesSubject.next(studies);
      this.paginationLinksSubject.next(paginationLinks);
    } else {
      this.studiesSubject.next(null);
      this.paginationLinksSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetStudies = (error: HttpErrorResponse): void => {
    this.studiesSubject.next(null);
    this.paginationLinksSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };
}
