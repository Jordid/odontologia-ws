import {
  HttpErrorResponse,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { finalize, Observable, Subject } from 'rxjs';
import { OAuthStorageService } from '../../auth/services/o-auth-storage.service';
import { CommonsHttpService } from '../../core/services/commons/commons-http/commons-http.service';
import { PaginationLinks } from '../../core/types/pagination-links';
import { ProgressBarService } from '../../shared/services/progress-bar/progress-bar.service';
import { IExam } from '../types/exam.interface';
import { IFile } from '../types/file.interface';
import { OrderStatusEnum } from '../types/order-status.enum';
import {
  ICreateExam,
  ICreateOrder,
  IOrder,
  IUpdateOrder
} from '../types/order.interface';
import { IRadiographyType } from '../types/radiography-type.interface';
import { OrdersHttpService } from './orders-http.service';
import { OrdersSnackbarsService } from './orders-snackbars.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  protected readonly orderSubject = new Subject<IOrder>();
  protected readonly ordersSubject = new Subject<IOrder[]>();
  protected readonly examSubject = new Subject<IExam>();
  protected readonly examsSubject = new Subject<IExam[]>();
  protected readonly radiographyTypesSubject = new Subject<
    IRadiographyType[]
  >();
  protected readonly fileSubject = new Subject<IFile>();
  protected readonly paginationLinksSubject = new Subject<PaginationLinks>();

  constructor(
    private ordersHttp: OrdersHttpService,
    private commonsHttp: CommonsHttpService,
    public orderSnackbars: OrdersSnackbarsService,
    private progressBarService: ProgressBarService,
    private oAuthStorage: OAuthStorageService
  ) {}

  private enableLoading(): void {
    this.progressBarService.show();
  }

  private disableLoading(): void {
    this.progressBarService.hide();
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

  public getOrder(orderId: number | string): void {
    if (this.oAuthStorage.hasOAuth) {
      this.ordersHttp.getOrder$(orderId).subscribe({
        next: this.nextGetOrder,
        error: this.errorGetOrder,
      });
    }
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
    if (this.oAuthStorage.hasOAuth) {
      this.enableLoading();
      this.ordersHttp
        .createOrder$(createOrderJson)
        .pipe(finalize(() => this.disableLoading()))
        .subscribe({
          next: this.nextCreateOrder,
          error: this.errorCreateOrder,
        });
    }
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

  public updateOrder(orderId: number, updateOrderJson: IUpdateOrder): void {
    if (this.oAuthStorage.hasOAuth) {
      this.enableLoading();
      this.ordersHttp
        .updateOrder$(orderId, updateOrderJson)
        .pipe(finalize(() => this.disableLoading()))
        .subscribe({
          next: this.nextUpdateOrder,
          error: this.errorUpdateOrder,
        });
    }
  }

  private nextUpdateOrder = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const order: IOrder = data.body.result[0];
      this.orderSubject.next(order);
    } else {
      this.orderSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorUpdateOrder = (error: HttpErrorResponse): void => {
    this.orderSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get Orders. */
  public getOrders$(): Observable<IOrder[]> {
    return this.ordersSubject.asObservable();
  }

  public getOrders(clientId?: string | number, params?: Params): void {
    if (params) {
      params['status'] = OrderStatusEnum.SENT;
    } else {
      params = {} as Params;
      params['status'] = OrderStatusEnum.SENT;
    }
    this.enableLoading();
    if (this.oAuthStorage.hasOAuth) {
      this.ordersHttp
        .getOrders$(clientId, params)
        .pipe(finalize(() => this.disableLoading()))
        .subscribe({
          next: this.nextGetOrders,
          error: this.errorGetOrders,
        });
    }
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
    if (this.oAuthStorage.hasOAuth) {
      this.enableLoading();
      this.ordersHttp
        .uploadFiles$(file)
        .pipe(finalize(() => this.disableLoading()))
        .subscribe({ next: this.nextUploadFile, error: this.errorUploadFile });
    }
  }
  public uploadFileAux(file: File): Observable<HttpEvent<any>> {
    return this.ordersHttp.uploadFilesAux$(file);
  }

  private nextUploadFile = (data: HttpResponse<any>): void => {
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
    if (this.oAuthStorage.hasOAuth) {
      this.enableLoading();
      this.ordersHttp
        .createExam$(orderId, createExamJson)
        .pipe(finalize(() => this.disableLoading()))
        .subscribe({ next: this.nextCreateExam, error: this.errorCreateExam });
    }
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

  /* Get Exams. */
  public getExams$(): Observable<IExam[]> {
    return this.examsSubject.asObservable();
  }

  public getExams(orderId: number): void {
    if (this.oAuthStorage.hasOAuth) {
      this.enableLoading();
      this.ordersHttp
        .getExams$(orderId)
        .pipe(finalize(() => this.disableLoading()))
        .subscribe({
          next: this.nextGetExams,
          error: this.errorGetExams,
        });
    }
  }

  private nextGetExams = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const exams: IExam[] = data.body.result;
      const paginationLinks: PaginationLinks = data.body.links;
      this.examsSubject.next(exams);
      this.paginationLinksSubject.next(paginationLinks);
    } else {
      this.examsSubject.next(null);
      this.paginationLinksSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetExams = (error: HttpErrorResponse): void => {
    this.examsSubject.next(null);
    this.paginationLinksSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /** Get exam. */
  public getExam(orderId: number | string, examId: number | string): void {
    if (this.oAuthStorage.hasOAuth) {
      this.ordersHttp
        .getExam$(orderId, examId)

        .subscribe({
          next: this.nextGetExam,
          error: this.errorGetExam,
        });
    }
  }

  private nextGetExam = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const exam: IExam = data.body.result?.[0];
      this.examSubject.next(exam);
    } else {
      this.examSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetExam = (error: HttpErrorResponse): void => {
    this.examSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get RadiographyTypes. */
  public getRadiographyTypes$(): Observable<IRadiographyType[]> {
    return this.radiographyTypesSubject.asObservable();
  }

  public getRadiographyTypes(): void {
    if (this.oAuthStorage.hasOAuth) {
      this.ordersHttp.getRadiographyTypes$().subscribe({
        next: this.nextGetRadiographyTypes,
        error: this.errorGetRadiographyTypes,
      });
    }
  }

  private nextGetRadiographyTypes = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const radiographyTypes: IRadiographyType[] = data.body.result;
      this.radiographyTypesSubject.next(radiographyTypes);
    } else {
      this.radiographyTypesSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetRadiographyTypes = (error: HttpErrorResponse): void => {
    this.radiographyTypesSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };
}
