import { TestBed } from '@angular/core/testing';

import { OrdersSnackbarsService } from './orders-snackbars.service';

describe('OrdersSnackbarsService', () => {
  let service: OrdersSnackbarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersSnackbarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
