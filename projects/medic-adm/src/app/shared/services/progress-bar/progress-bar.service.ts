import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  protected readonly progressBarSubject = new BehaviorSubject<boolean>(false);
  protected readonly loadingMap: Map<string, boolean> = new Map<
    string,
    boolean
  >();

  constructor() {}

  public getProgressBar$(): Observable<boolean> {
    return this.progressBarSubject.asObservable();
  }

  public show(): void {
    this.progressBarSubject.next(true);
  }

  public hide(): void {
    this.progressBarSubject.next(false);
  }

  public setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error(
        'The request URL must be provided to the ProgressBarService.setLoading function'
      );
    }
    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.progressBarSubject.next(true);
    } else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      this.progressBarSubject.next(false);
    }
  }
}
