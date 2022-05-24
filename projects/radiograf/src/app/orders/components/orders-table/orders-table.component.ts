import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { OrderDataSource } from '../../types/order-datasource';
import { IOrder } from '../../types/order.interface';
@Component({
  selector: 'odo-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit, AfterViewInit {
  private subs: Subscription = new Subscription();

  @Input() showPaginator = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<IOrder>;
  public dataSource: OrderDataSource = null;

  public displayedColumns: string[] = [
    'firstName',
    'lastName',
    'document',
    'specialty',
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
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  viewOrder(oder: IOrder): void {}
}
