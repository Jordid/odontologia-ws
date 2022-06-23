import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { IExam } from '../../types/exam.interface';
import { ICreateOrder, IOrder } from '../../types/order.interface';
@Component({
  selector: 'odo-create-order-form',
  templateUrl: './create-order-form.component.html',
  styleUrls: ['./create-order-form.component.scss'],
})
export class CreateOrderFormComponent implements OnInit, OnDestroy {
  medicId: number;
  clientId: number;
  order: IOrder;
  formSent: boolean = false;
  showContinueButton: boolean = false;
  showCreateExamForm: boolean = false;
  radiographyId: number;
  exams: IExam[];
  gettingExams: boolean = false;
  showCreateStudyForm: boolean = false;

  private subs: Subscription = new Subscription();

  constructor(private router: Router, private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.subs.add(this.ordersService.getOrder$().subscribe(this.getOrder));
    this.subs.add(this.ordersService.getExams$().subscribe(this.getExams));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getOrder = (order: IOrder) => {
    this.order = order;
    if (order?.orderId) {
      this.ordersService.orderSnackbars.successGeneratedOrder();
    } else {
      this.ordersService.orderSnackbars.failureGeneratedOrder();
    }
  };

  onMedicIdChange(medicId: string): void {
    if (medicId) {
      this.medicId = parseInt(medicId);
    } else {
      this.medicId = 0;
    }
  }
  onClientIdChange(clientId: string): void {
    if (clientId) {
      this.clientId = parseInt(clientId);
    } else {
      this.clientId = 0;
    }
  }

  createOrder(): void {
    if (this.medicId && this.clientId) {
      const createOrderJson = {
        clientId: this.clientId,
        doctorId: this.medicId,
      } as ICreateOrder;
      this.formSent = true;
      this.ordersService.createOrder(createOrderJson);
    }
  }

  addExam(): void {
    this.showCreateExamForm = true;
    this.showCreateStudyForm = false;
  }

  onImageUploadedChange(uploaded: boolean): void {
    this.showContinueButton = true;
  }

  continue(): void {
    this.router.navigate(['/admin/orders']);
  }

  onSentCreateExamChange(sentCreateExam: boolean) {
    this.showCreateExamForm = false;
    if (this.order?.orderId && sentCreateExam === true) {
      this.gettingExams = true;
      this.ordersService.getExams(this.order?.orderId);
    }
  }

  private getExams = (exams: IExam[]): void => {
    this.exams = exams;
    this.gettingExams = false;
  };

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
}
