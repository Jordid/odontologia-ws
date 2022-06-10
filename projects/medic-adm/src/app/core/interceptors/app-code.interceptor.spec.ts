import { TestBed } from '@angular/core/testing';
import { AppCodeInterceptor } from './app-code.interceptor';

describe('AppCodeInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AppCodeInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: AppCodeInterceptor = TestBed.inject(AppCodeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
