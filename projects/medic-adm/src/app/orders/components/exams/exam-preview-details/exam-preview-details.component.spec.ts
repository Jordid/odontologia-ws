import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPreviewDetailsComponent } from './exam-preview-details.component';

describe('ExamPreviewDetailsComponent', () => {
  let component: ExamPreviewDetailsComponent;
  let fixture: ComponentFixture<ExamPreviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamPreviewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPreviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
