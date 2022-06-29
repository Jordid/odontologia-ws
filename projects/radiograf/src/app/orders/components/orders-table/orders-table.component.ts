import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { OrderDataSource } from '../../types/order-datasource';
import { OrderStatusEnum } from '../../types/order-status.enum';
import { IOrder, IUpdateOrder } from '../../types/order.interface';
@Component({
  selector: 'odo-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit, AfterViewInit {
  private clientId: string = this.route.snapshot.paramMap.get('clientId');

  OrderStatusEnum = OrderStatusEnum;
  private subs: Subscription = new Subscription();

  @Input() showPaginator = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<IOrder>;
  public dataSource: OrderDataSource = null;
  params: Params;

  public displayedColumns: string[] = [
    'orderCode',
    'patientNames',
    'patientDocument',
    'medicNames',
    'medicDocument',
    'status',
    'actions',
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.dataSource = new OrderDataSource(
      this.route,
      this.router,
      this.ordersService
    );
    this.subs.add(this.ordersService.getOrder$().subscribe(this.getOrder));
    this.subs.add(this.route.queryParamMap.subscribe(this.getQueryParamMap));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    const params: Params = {};
    if (queryParamMap?.keys?.length) {
      for (const key of queryParamMap.keys) {
        params[key] = queryParamMap.get(key);
      }
    }
    this.params = params;
  };

  private getOrder = (order: IOrder) => {
    if (order?.orderId) {
      this.ordersService.orderSnackbars.successSentOrder();
    } else {
      this.ordersService.orderSnackbars.failureSentOrder();
    }
    this.ordersService.getOrders(this.clientId, this.params);
  };

  viewOrder(order: IOrder): void {
    if (order?.orderId && order?.client?.clientId) {
      let route = null;
      if (this.clientId) {
        route = `/admin/clients/${order?.client?.clientId}/orders/${order?.orderId}`;
      } else {
        route = `/admin/orders/${order?.orderId}`;
      }
      if (route) {
        this.router.navigate([route]);
      }
    }
  }

  send(order: IOrder): void {
    if (order?.orderId) {
      const updateOrderJson: IUpdateOrder = {
        status: OrderStatusEnum.SENT,
      };
      this.ordersService.updateOrder(order?.orderId, updateOrderJson);
    }
  }

  editOrder(order: IOrder): void {
    if (order?.orderId) {
      this.router.navigate([`/admin/orders/${order?.orderId}/edit-order`]);
    }
  }

  getNameAndLastName(firstName: string, lastName: string): string {
    let nameAndLastName = '';
    if (firstName && lastName) {
      nameAndLastName = firstName + ' ' + lastName;
    } else if (firstName) {
      nameAndLastName = firstName;
    } else if (lastName) {
      nameAndLastName = lastName;
    }
    return nameAndLastName;
  }
}
