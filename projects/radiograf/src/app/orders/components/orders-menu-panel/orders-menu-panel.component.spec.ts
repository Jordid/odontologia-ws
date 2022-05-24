import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMenuPanelComponent } from './orders-menu-panel.component';

describe('OrdersMenuPanelComponent', () => {
  let component: OrdersMenuPanelComponent;
  let fixture: ComponentFixture<OrdersMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersMenuPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
