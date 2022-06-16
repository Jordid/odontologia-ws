import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLinesChartComponent } from './sales-lines-chart.component';

describe('SalesLinesChartComponent', () => {
  let component: SalesLinesChartComponent;
  let fixture: ComponentFixture<SalesLinesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesLinesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLinesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
