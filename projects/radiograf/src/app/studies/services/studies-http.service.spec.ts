import { TestBed } from '@angular/core/testing';

import { StudiesHttpService } from './studies-http.service';

describe('StudiesHttpService', () => {
  let service: StudiesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
