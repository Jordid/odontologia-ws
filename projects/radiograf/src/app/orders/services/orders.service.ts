import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { finalize, Observable, Subject } from 'rxjs';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { PaginationLinks } from '../../core/types/pagination-links';
import { IOrder } from '../types/order.interface';
import { OrdersHttpService } from './orders-http.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  protected readonly orderSubject = new Subject<IOrder>();
  protected readonly ordersSubject = new Subject<IOrder[]>();
  constructor(
    private ordersHttp: OrdersHttpService,
    private commonsHttp: CommonsHttpService
  ) {}
  protected readonly paginationLinksSubject = new Subject<PaginationLinks>();

  private enableLoading(): void {
    //this.allApp.progressBar.show();
  }

  private disableLoading(): void {
    //this.allApp.prog/ressBar.hide();
  }

  // Pagination Links
  // ==========================================================================================

  public getPaginationLinks$(): Observable<PaginationLinks> {
    return this.paginationLinksSubject.asObservable();
  }

  public createOrder(order: IOrder): void {
    this.enableLoading();
    this.ordersHttp
      .createOrder$(order)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({ next: this.nextCreateOrder, error: this.errorCreateOrder });
  }

  private nextCreateOrder = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const order: IOrder = data.body.result[0];
      this.orderSubject.next(order);
    } else {
      this.orderSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorCreateOrder = (error: HttpErrorResponse): void => {
    this.orderSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get Order */
  public getOrder$(): Observable<IOrder> {
    return this.orderSubject.asObservable();
  }

  public getOrder(orderId: number): void {
    /*  if (this.oAuthStorage.hasOAuth) { */
    this.ordersHttp.getOrder$(orderId).subscribe({
      next: this.nextGetOrder,
      error: this.errorGetOrder,
    });
    /* } */
  }

  private nextGetOrder = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const order: IOrder = data.body.result[0];
      this.orderSubject.next(order);
    } else {
      this.orderSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetOrder = (error: HttpErrorResponse): void => {
    this.orderSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get Orders. */
  public getOrders$(): Observable<IOrder[]> {
    return this.ordersSubject.asObservable();
  }

  public getOrders(params?: Params): void {
    /*  if (this.oAuthStorage.hasOAuth) { */
    this.ordersHttp.getOrders$(params).subscribe({
      next: this.nextGetOrders,
      error: this.errorGetOrders,
    });
    /* } */
  }

  private nextGetOrders = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const orders: IOrder[] = data.body.result;
      const paginationLinks: PaginationLinks = data.body.links;
      this.ordersSubject.next(orders);
      this.paginationLinksSubject.next(paginationLinks);
    } else {
      this.ordersSubject.next(null);
      this.paginationLinksSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetOrders = (error: HttpErrorResponse): void => {
    this.ordersSubject.next(null);
    this.paginationLinksSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };
}