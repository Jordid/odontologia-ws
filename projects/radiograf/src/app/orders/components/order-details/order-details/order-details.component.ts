import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgressBarService } from '../../../../shared/services/progress-bar/progress-bar.service';
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
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private progressBarService: ProgressBarService
  ) {}

  ngOnInit(): void {
    this.subs.add(this.ordersService.getOrder$().subscribe(this.getOrder));
    this.subs.add(this.ordersService.getExams$().subscribe(this.getExams));
    if (this.orderId) {
      this.enableLoading();
      this.ordersService.getOrder(this.orderId);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private enableLoading(): void {
    this.loading = true;
    this.progressBarService.show();
  }

  private disableLoading(): void {
    this.loading = false;
    this.progressBarService.hide();
  }

  private getOrder = (order: IOrder) => {
    this.order = order;
    this.disableLoading();
    if (order?.orderId) {
      this.enableLoading();
      this.ordersService.getExams(this.order?.orderId);
    } else {
      this.ordersService.orderSnackbars.failureGetOrder();
    }
  };

  private getExams = (exams: IExam[]): void => {
    this.exams = exams;
    this.disableLoading();
  };
}
