import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiRadiografEnv } from '../../core/config/apis/api-radiograf/api-radiograf.config';
import { IOrder } from '../types/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersHttpService {
  constructor(private http: HttpClient) {}

  public createOrder$(order: IOrder): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders`;
    return this.http.post(url, order, { observe: 'response' });
  }

  public getOrder$(orderId: number): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/${orderId}`;
    return this.http.get(url, { observe: 'response' });
  }

  public getOrders$(params?: Params): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders`;
    return this.http.get(url, { observe: 'response', params });
  }
}
