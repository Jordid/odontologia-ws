import { TestBed } from '@angular/core/testing';

import { MedicsHttpService } from './medics-http.service';

describe('MedicsHttpService', () => {
  let service: MedicsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
