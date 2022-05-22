import { TestBed } from '@angular/core/testing';

import { ClientsHttpService } from './clients-http.service';

describe('ClientsHttpService', () => {
  let service: ClientsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
