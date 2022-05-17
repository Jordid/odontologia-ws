import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRadiografEnv } from '../../core/config/apis/api-radiograf/api-radiograf.config';
@Injectable({
  providedIn: 'root',
})
export class MedicsHttpService {
  constructor(private http: HttpClient) {}

  public createMedic$(medic: any): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/doctors`;

    return this.http.post(url, medic, { observe: 'response' });
  }
}
