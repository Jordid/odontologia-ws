import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiRadiografEnv } from '../../core/config/apis/api-radiograf/api-radiograf.config';
import { IClient } from '../types/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientsHttpService {
  constructor(private http: HttpClient) {}

  public createClient$(client: IClient): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/clients`;
    return this.http.post(url, client, { observe: 'response' });
  }

  public getClient$(clientId: number): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/clients/${clientId}`;
    return this.http.get(url, { observe: 'response' });
  }

  public updateClient$(
    clientId: number,
    client: IClient
  ): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/clients/${clientId}`;
    return this.http.patch(url, client, { observe: 'response' });
  }

  public getClients$(params?: Params): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/clients`;
    return this.http.get(url, { observe: 'response', params });
  }

  public deleteClient$(clientId: number): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/clients/${clientId}`;
    return this.http.delete(url, { observe: 'response' });
  }
}
