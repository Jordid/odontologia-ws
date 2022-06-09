import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../../services/orders.service';
import { IExam } from '../../../types/exam.interface';
import { IOrder } from '../../../types/order.interface';

@Component({
  selector: 'odo-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  private orderId: string = this.route.snapshot.paramMap.get('orderId');

  private subs: Subscription = new Subscription();

  exams: IExam[];
  order: IOrder;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.subs.add(this.ordersService.getOrder$().subscribe(this.getOrder));
    this.subs.add(this.ordersService.getExams$().subscribe(this.getExams));
    if (this.orderId) {
      this.ordersService.getOrder(this.orderId);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getOrder = (order: IOrder) => {
    this.order = order;
    if (order?.orderId) {
      this.ordersService.getExams(this.order?.orderId);
    } else {
      this.ordersService.orderSnackbars.failureGetOrder();
    }
  };

  private getExams = (exams: IExam[]): void => {
    this.exams = exams;
  };
}
