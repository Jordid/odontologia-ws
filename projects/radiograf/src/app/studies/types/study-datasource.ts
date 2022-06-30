import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { OdoDataSource } from '../../core/types/odo-data-source';
import { PaginationLinks } from '../../core/types/pagination-links';
import { StudiesService } from '../services/studies.service';
import { IStudy } from './study.interface';

export class StudyDataSource extends OdoDataSource<IStudy> {
  private orderId: string = this.route.snapshot.paramMap.get('orderId');
  private examId: string = this.route.snapshot.paramMap.get('examId');

  private studies$: Observable<IStudy[]> = this.studiesService
    .getStudies$()
    .pipe(shareReplay(1));

  public paginationLinks$: Observable<PaginationLinks> = this.studiesService
    .getPaginationLinks$()
    .pipe(shareReplay(1));

  constructor(
    route: ActivatedRoute,
    router: Router,
    private studiesService: StudiesService
  ) {
    super(route, router);
  }

  connect(): Observable<IStudy[]> {
    super.initialization();
    return this.studies$;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    super.queryParamMapActions(queryParamMap);
    if (this.orderId && this.examId) {
      this.studiesService.getStudies(
        this.orderId,
        this.examId,
        this.queryParams
      );
    }
  };
}
