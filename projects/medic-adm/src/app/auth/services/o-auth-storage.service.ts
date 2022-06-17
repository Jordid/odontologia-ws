import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StorageUtilsService } from '../../core/services/app/storage-utils/storage-utils.service';
import { OAuth } from '../types/o-auth';
import { IUser } from '../types/user-interface';

@Injectable({
  providedIn: 'root',
})
export class OAuthStorageService {
  private oAuth: OAuth;
  protected readonly oAuthSubject = new Subject<OAuth>();

  private lsKey = 'oAuth';

  constructor(private storageUtilsService: StorageUtilsService) {}

  public get(): OAuth {
    if (this.storageUtilsService.validateInLocalStorage(this.lsKey)) {
      return JSON.parse(localStorage.getItem(this.lsKey));
    } else {
      return this.oAuth;
    }
  }

  public get$(): Observable<OAuth> {
    return this.oAuthSubject.asObservable();
  }

  public set(oAuth: OAuth): void {
    if (this.storageUtilsService.validateLocalStorage) {
      localStorage.setItem(this.lsKey, JSON.stringify(oAuth));
    } else {
      this.oAuth = oAuth;
    }
    this.oAuthSubject.next(oAuth);
  }

  public reset(): void {
    if (this.storageUtilsService.validateInLocalStorage(this.lsKey)) {
      localStorage.removeItem(this.lsKey);
    } else {
      this.oAuth = undefined;
    }
    this.oAuthSubject.next(null);
  }

  get hasOAuth(): boolean {
    if (
      this.get() &&
      this.get().token &&
      this.get()?.user?.userId &&
      this.get()?.user?.person?.doctor?.doctorId
    ) {
      return true;
    }
    return false;
  }

  get getUserID(): number {
    return this.get()?.user?.userId;
  }

  get getUser(): IUser {
    return this.get()?.user;
  }
}
