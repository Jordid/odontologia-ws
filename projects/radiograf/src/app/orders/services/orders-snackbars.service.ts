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
      OrderSnackbars.successGenerated.message,
      OrderSnackbars.successGenerated.closeBtn,
      OrderSnackbars.successGenerated.config
    );
  }

  public failureGeneratedOrder(): void {
    this.snackbar.open(
      OrderSnackbars.failureGenerated.message,
      OrderSnackbars.failureGenerated.closeBtn,
      OrderSnackbars.failureGenerated.config
    );
  }
}
