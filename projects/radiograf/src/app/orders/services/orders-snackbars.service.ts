import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderSnackbars } from '../types/order-snackbars.config';

@Injectable({
  providedIn: 'root',
})
export class OrdersSnackbarsService {
  constructor(private snackbar: MatSnackBar) {}

  public successGeneratedOrder(): void {
    this.snackbar.open(
      OrderSnackbars.successGeneratedOrder.message,
      OrderSnackbars.successGeneratedOrder.closeBtn,
      OrderSnackbars.successGeneratedOrder.config
    );
  }

  public failureGeneratedOrder(): void {
    this.snackbar.open(
      OrderSnackbars.failureGeneratedOrder.message,
      OrderSnackbars.failureGeneratedOrder.closeBtn,
      OrderSnackbars.failureGeneratedOrder.config
    );
  }

  public successSentOrder(): void {
    this.snackbar.open(
      OrderSnackbars.successSentOrder.message,
      OrderSnackbars.successSentOrder.closeBtn,
      OrderSnackbars.successSentOrder.config
    );
  }

  public failureSentOrder(): void {
    this.snackbar.open(
      OrderSnackbars.failureSentOrder.message,
      OrderSnackbars.failureSentOrder.closeBtn,
      OrderSnackbars.failureSentOrder.config
    );
  }
}
