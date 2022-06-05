import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  protected readonly progressBarSubject = new BehaviorSubject<boolean>(false);

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
}
