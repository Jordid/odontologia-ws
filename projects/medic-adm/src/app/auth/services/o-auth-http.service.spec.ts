import { TestBed } from '@angular/core/testing';

import { OAuthHttpService } from './o-auth-http.service';

describe('OAuthHttpService', () => {
  let service: OAuthHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OAuthHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
