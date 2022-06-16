import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExamsPieChartComponent } from './total-exams-pie-chart.component';

describe('TotalExamsPieChartComponent', () => {
  let component: TotalExamsPieChartComponent;
  let fixture: ComponentFixture<TotalExamsPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalExamsPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalExamsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
