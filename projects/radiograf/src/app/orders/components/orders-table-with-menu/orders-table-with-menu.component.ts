import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { IOrder } from '../../types/order.interface';

@Component({
  selector: 'odo-orders-table-with-menu',
  templateUrl: './orders-table-with-menu.component.html',
  styleUrls: ['./orders-table-with-menu.component.scss'],
})
export class OrdersTableWithMenuComponent {
  public orders$: Observable<IOrder[]> = this.ordersService
    .getOrders$()
    .pipe(shareReplay(1));

  constructor(private ordersService: OrdersService) {}
}
