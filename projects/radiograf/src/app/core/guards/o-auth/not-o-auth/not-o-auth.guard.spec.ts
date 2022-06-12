import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { NotOAuthGuard } from './not-o-auth.guard';

describe('NotOAuthGuard', () => {
  let guard: NotOAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
    });
    guard = TestBed.inject(NotOAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
