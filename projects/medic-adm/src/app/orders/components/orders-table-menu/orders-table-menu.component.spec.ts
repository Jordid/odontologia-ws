import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTableMenuComponent } from './orders-table-menu.component';

describe('OrdersTableMenuComponent', () => {
  let component: OrdersTableMenuComponent;
  let fixture: ComponentFixture<OrdersTableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersTableMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
