import {
  HttpErrorResponse,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { finalize, Observable, Subject } from 'rxjs';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { PaginationLinks } from '../../core/types/pagination-links';
import { IExam } from '../types/exam.interface';
import { IFile } from '../types/file.interface';
import { ICreateExam, ICreateOrder, IOrder } from '../types/order.interface';
import { OrdersHttpService } from './orders-http.service';
import { OrdersSnackbarsService } from './orders-snackbars.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  protected readonly orderSubject = new Subject<IOrder>();
  protected readonly ordersSubject = new Subject<IOrder[]>();
  protected readonly examSubject = new Subject<any>();
  protected readonly fileSubject = new Subject<IFile>();
  protected readonly paginationLinksSubject = new Subject<PaginationLinks>();

  constructor(
    private ordersHttp: OrdersHttpService,
    private commonsHttp: CommonsHttpService,
    public orderSnackbars: OrdersSnackbarsService
  ) {}

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

  public createOrder(createOrderJson: ICreateOrder): void {
    this.enableLoading();
    this.ordersHttp
      .createOrder$(createOrderJson)
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

  /* Upload file. */
  public getFile$(): Observable<any> {
    return this.fileSubject.asObservable();
  }

  public uploadFile(file: File): void {
    this.enableLoading();
    this.ordersHttp
      .uploadFiles$(file)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({ next: this.nextUploadFile, error: this.errorUploadFile });
  }
  public uploadFileAux(file: File): Observable<HttpEvent<any>> {
    return this.ordersHttp.uploadFilesAux$(file);
  }

  private nextUploadFile = (data: HttpResponse<any>): void => {
    console.log('uploaded: ', data);

    /* if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const order: IOrder = data.body.result[0];
      this.fileSubject.next(order);
    } else {
      this.fileSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    } */
  };

  private errorUploadFile = (error: HttpErrorResponse): void => {
    this.fileSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get exam. */
  public getExam$(): Observable<IExam> {
    return this.examSubject.asObservable();
  }

  /* Create exam. */
  public createExam(orderId: number, createExamJson: ICreateExam): void {
    this.enableLoading();
    this.ordersHttp
      .createExam$(orderId, createExamJson)
      .pipe(finalize(() => this.disableLoading()))
      .subscribe({ next: this.nextCreateExam, error: this.errorCreateExam });
  }

  private nextCreateExam = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const exam: IExam = data.body.result[0];
      this.examSubject.next(exam);
    } else {
      this.examSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorCreateExam = (error: HttpErrorResponse): void => {
    this.examSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };
}
