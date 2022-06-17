import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiRadiografEnv } from '../../core/config/apis/api-radiograf/api-radiograf.config';
import {
  ICreateExam,
  ICreateOrder,
  IUpdateOrder,
} from '../types/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersHttpService {
  constructor(private http: HttpClient) {}

  public createOrder$(
    createOrderJson: ICreateOrder
  ): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders`;
    return this.http.post(url, createOrderJson, { observe: 'response' });
  }

  public updateOrder$(
    orderId: number,
    updateOrderJson: IUpdateOrder
  ): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/${orderId}`;
    return this.http.patch(url, updateOrderJson, { observe: 'response' });
  }

  public getOrder$(orderId: number | string): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/${orderId}`;
    return this.http.get(url, { observe: 'response' });
  }

  public getOrders$(
    clientId?: string | number,
    params?: Params
  ): Observable<HttpResponse<any>> {
    let url = `${ApiRadiografEnv.baseUrl}/orders`;
    if (clientId) {
      url = `${ApiRadiografEnv.baseUrl}/clients`;
      url = url.concat('/').concat(clientId.toString()).concat('/orders');
    }
    return this.http.get(url, { observe: 'response', params });
  }

  public uploadFiles$(file: File): Observable<HttpResponse<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const url = `${ApiRadiografEnv.baseUrl}/uploadFile`;
    return this.http.post(url, formData, { observe: 'response' });
  }

  public uploadFilesAux$(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const url = `${ApiRadiografEnv.baseUrl}/uploadFile`;
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  public createExam$(
    orderId: number,
    createExamJson: ICreateExam
  ): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/${orderId}/radiography`;
    return this.http.post(url, createExamJson, { observe: 'response' });
  }

  public getExams$(orderId: number): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/${orderId}/radiography`;
    return this.http.get(url, { observe: 'response' });
  }

  public getExam$(
    orderId: number | string,
    examId: number | string
  ): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/${orderId}/radiography/${examId}`;
    return this.http.get(url, { observe: 'response' });
  }

  public getRadiographyTypes$(): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/radiography/types`;
    return this.http.get(url, { observe: 'response' });
  }
}
