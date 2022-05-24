import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTableWithMenuComponent } from './orders-table-with-menu.component';

describe('OrdersTableWithMenuComponent', () => {
  let component: OrdersTableWithMenuComponent;
  let fixture: ComponentFixture<OrdersTableWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersTableWithMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTableWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
