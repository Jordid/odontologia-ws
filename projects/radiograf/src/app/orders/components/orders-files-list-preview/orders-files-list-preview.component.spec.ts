import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersFilesListPreviewComponent } from './orders-files-list-preview.component';

describe('OrdersFilesListPreviewComponent', () => {
  let component: OrdersFilesListPreviewComponent;
  let fixture: ComponentFixture<OrdersFilesListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersFilesListPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersFilesListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
