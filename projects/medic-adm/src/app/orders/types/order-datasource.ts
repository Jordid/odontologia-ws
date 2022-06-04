import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { OdoDataSource } from '../../core/types/odo-data-source';
import { PaginationLinks } from '../../core/types/pagination-links';
import { OrdersService } from '../services/orders.service';
import { IOrder } from './order.interface';

export class OrderDataSource extends OdoDataSource<IOrder> {
  private orders$: Observable<IOrder[]> = this.ordersService
    .getOrders$()
    .pipe(shareReplay(1));

  public paginationLinks$: Observable<PaginationLinks> = this.ordersService
    .getPaginationLinks$()
    .pipe(shareReplay(1));

  constructor(
    route: ActivatedRoute,
    router: Router,
    private ordersService: OrdersService
  ) {
    super(route, router);
  }

  connect(): Observable<IOrder[]> {
    super.initialization();
    return this.orders$;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    super.queryParamMapActions(queryParamMap);
    this.ordersService.getOrders(this.queryParams);
  };
}
