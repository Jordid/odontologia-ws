import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { OdoDataSource } from '../../core/types/odo-data-source';
import { PaginationLinks } from '../../core/types/pagination-links';
import { MedicsService } from '../services/medics.service';
import { IMedic } from './medic.interface';


export class MedicDataSource extends OdoDataSource<IMedic> {
  private medics$: Observable<IMedic[]> = this.medicsService
    .getMedics$()
    .pipe(shareReplay(1));

  public paginationLinks$: Observable<PaginationLinks> = this.medicsService
    .getPaginationLinks$()
    .pipe(shareReplay(1));

  constructor(
    route: ActivatedRoute,
    router: Router,
    private medicsService: MedicsService
  ) {
    super(route, router);
  }

  connect(): Observable<IMedic[]> {
    super.initialization();
    this.subs.add(
      this.medicsService.getDeletedMedic$().subscribe(this.getDeletedMedic)
    );
    return this.medics$;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    super.queryParamMapActions(queryParamMap);
    this.medicsService.getMedics(this.queryParams);
  };

  private getDeletedMedic = (deletedMedic: boolean): void => {
    if (deletedMedic === true) {
      this.medicsService.getMedics(this.queryParams);
    }
  };
}
