import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { OAuthGuard } from './o-auth.guard';

describe('OAuthGuard', () => {
  let guard: OAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
    });
    guard = TestBed.inject(OAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
