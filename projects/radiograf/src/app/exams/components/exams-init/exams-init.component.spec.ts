import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsInitComponent } from './exams-init.component';

describe('ExamsInitComponent', () => {
  let component: ExamsInitComponent;
  let fixture: ComponentFixture<ExamsInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
