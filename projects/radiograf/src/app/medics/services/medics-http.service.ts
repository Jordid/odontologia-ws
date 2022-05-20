import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiRadiografEnv } from '../../core/config/apis/api-radiograf/api-radiograf.config';
import { IMedic } from '../types/medic.interface';
@Injectable({
  providedIn: 'root',
})
export class MedicsHttpService {
  constructor(private http: HttpClient) {}

  public createMedic$(medic: IMedic): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/doctors`;
    return this.http.post(url, medic, { observe: 'response' });
  }

  public getMedics$(params?: Params): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/doctors`;
    return this.http.get(url, { observe: 'response', params });
  }

  public deleteMedic$(medicId: number): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/doctors/${medicId}`;
    return this.http.delete(url, { observe: 'response' });
  }
}
