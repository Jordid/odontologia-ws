import { TestBed } from '@angular/core/testing';

import { StudiesSnackbarsService } from './studies-snackbars.service';

describe('StudiesSnackbarsService', () => {
  let service: StudiesSnackbarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiesSnackbarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
