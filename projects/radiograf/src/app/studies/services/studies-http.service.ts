import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiRadiografEnv } from '../../core/config/apis/api-radiograf/api-radiograf.config';

@Injectable({
  providedIn: 'root',
})
export class StudiesHttpService {
  constructor(private http: HttpClient) {}

  public getStudies$(
    orderId: number | string,
    examId: number | string,
    params?: Params
  ): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/orders/${orderId}/radiography/${examId}/studies`;
    return this.http.get(url, { observe: 'response', params });
  }
}
