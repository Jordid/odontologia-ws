import { TestBed } from '@angular/core/testing';

import { MedicSnackbarsService } from './medic-snackbars.service';

describe('MedicSnackbarsService', () => {
  let service: MedicSnackbarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicSnackbarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
