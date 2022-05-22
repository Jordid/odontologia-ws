import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { OdoDataSource } from '../../core/types/odo-data-source';
import { PaginationLinks } from '../../core/types/pagination-links';
import { IClient } from './client.interface';
import { ClientsService } from '../services/clients.service';


export class ClientDataSource extends OdoDataSource<IClient> {
  private clients$: Observable<IClient[]> = this.clientsService
    .getClients$()
    .pipe(shareReplay(1));

  public paginationLinks$: Observable<PaginationLinks> = this.clientsService
    .getPaginationLinks$()
    .pipe(shareReplay(1));

  constructor(
    route: ActivatedRoute,
    router: Router,
    private clientsService: ClientsService
  ) {
    super(route, router);
  }

  connect(): Observable<IClient[]> {
    super.initialization();
    this.subs.add(
      this.clientsService.getDeletedClient$().subscribe(this.getDeletedClient)
    );
    return this.clients$;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    super.queryParamMapActions(queryParamMap);
    this.clientsService.getClients(this.queryParams);
  };

  private getDeletedClient = (deletedClient: boolean): void => {
    if (deletedClient === true) {
      this.clientsService.getClients(this.queryParams);
    }
  };
}
