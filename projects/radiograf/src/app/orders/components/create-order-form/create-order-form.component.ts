import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { ICreateOrder, IOrder } from '../../types/order.interface';
@Component({
  selector: 'odo-create-order-form',
  templateUrl: './create-order-form.component.html',
  styleUrls: ['./create-order-form.component.scss'],
})
export class CreateOrderFormComponent implements OnInit, OnDestroy {
  medicId: number = null;
  clientId: number = null;
  order: IOrder;
  formSent: boolean = false;
  showContinueButton: boolean = false;

  private subs: Subscription = new Subscription();

  constructor(private router: Router, private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.subs.add(this.ordersService.getOrder$().subscribe(this.getOrder));
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
      this.medicId = null;
    }
  }
  onClientIdChange(clientId: string): void {
    if (clientId) {
      this.clientId = parseInt(clientId);
    } else {
      this.clientId = null;
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

  onImageUploadedChange(uploaded: boolean): void {
    this.showContinueButton = true;
  }

  continue(): void {
    this.router.navigate(['/admin/orders']);
  }
}
