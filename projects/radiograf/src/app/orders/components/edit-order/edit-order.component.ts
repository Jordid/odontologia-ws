import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgressBarService } from '../../../shared/services/progress-bar/progress-bar.service';
import { OrdersService } from '../../services/orders.service';
import { IExam } from '../../types/exam.interface';
import { IOrder } from '../../types/order.interface';

@Component({
  selector: 'odo-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss'],
})
export class EditOrderComponent implements OnInit {
  private orderId: string = this.route.snapshot.paramMap.get('orderId');

  private subs: Subscription = new Subscription();

  order: IOrder;
  exams: IExam[];
  radiographyId: number;
  gettingExams: boolean = false;

  showCreateExamForm: boolean = false;
  showCreateStudyForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private progressBarService: ProgressBarService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.subs.add(this.ordersService.getOrder$().subscribe(this.getOrder));
    this.subs.add(this.ordersService.getExams$().subscribe(this.getExams));
    this.subs.add(this.ordersService.getDeleted$().subscribe(this.getDeleted));
    if (this.orderId) {
      this.enableLoading();
      this.ordersService.getOrder(this.orderId);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private enableLoading(): void {
    this.progressBarService.show();
  }

  private disableLoading(): void {
    this.progressBarService.hide();
  }

  private getOrder = (order: IOrder) => {
    this.order = order;
    this.disableLoading();
    if (order?.orderId) {
      this.enableLoading();
      this.gettingExams = true;
      this.ordersService.getExams(this.order?.orderId);
    } else {
      this.ordersService.orderSnackbars.failureGetOrder();
    }
  };

  private getExams = (exams: IExam[]): void => {
    this.exams = exams;
    this.disableLoading();
    this.gettingExams = false;
  };

  private getDeleted = (deleted: boolean): void => {
    if (deleted) {
      this.ordersService.orderSnackbars.successDeleteExam();
      this.ordersService.getExams(this.order?.orderId);
    } else {
      this.ordersService.orderSnackbars.failureDeleteExam();
    }
  };

  addExam(): void {
    this.showCreateExamForm = true;
    this.showCreateStudyForm = false;
  }

  onSentCreateExamChange(sentCreateExam: boolean) {
    this.showCreateExamForm = false;
    if (this.order?.orderId && sentCreateExam === true) {
      this.gettingExams = true;
      this.ordersService.getExams(this.order?.orderId);
    }
  }

  onAddStudioClickedChange(radiographyId: number): void {
    this.showCreateStudyForm = true;
    this.showCreateExamForm = false;
    this.radiographyId = radiographyId;
  }

  onCancelCreateStudioClicked(cancel: boolean) {
    this.showCreateStudyForm = false;
  }

  onSentCreateStudyChange(sentCreateStudy: boolean) {
    this.showCreateStudyForm = false;
    if (this.order?.orderId && sentCreateStudy === true) {
      this.gettingExams = true;
      this.ordersService.getExams(this.order?.orderId);
    }
  }

  onDeleteStudioClickedChange(exam: IExam): void {
    this.ordersService.deleteExam(exam?.orderId, exam?.radiographyId);
  }

  onViewStudiesClickedChange(exam: IExam): void {
    this.router.navigate([`/admin/orders/${exam?.orderId}/exams/${exam?.radiographyId}/studies`]);
  }
}
