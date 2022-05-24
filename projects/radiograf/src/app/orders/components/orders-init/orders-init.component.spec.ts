import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersInitComponent } from './orders-init.component';

describe('OrdersInitComponent', () => {
  let component: OrdersInitComponent;
  let fixture: ComponentFixture<OrdersInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
