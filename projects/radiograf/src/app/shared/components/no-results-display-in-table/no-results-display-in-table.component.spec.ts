import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsDisplayInTableComponent } from './no-results-display-in-table.component';

describe('NoResultsDisplayInTableComponent', () => {
  let component: NoResultsDisplayInTableComponent;
  let fixture: ComponentFixture<NoResultsDisplayInTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoResultsDisplayInTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultsDisplayInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
