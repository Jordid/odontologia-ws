import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRadiografEnv } from '../../core/config/apis/api-radiograf/api-radiograf.config';

@Injectable({
  providedIn: 'root',
})
export class OAuthHttpService {
  constructor(private http: HttpClient) {}

  public login$(loginJSON: any): Observable<HttpResponse<any>> {
    const url = `${ApiRadiografEnv.baseUrl}/login`;
    return this.http.post(url, loginJSON, { observe: 'response' });
  }
}
