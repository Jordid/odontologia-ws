import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPreviewDialogComponent } from './exam-preview-dialog.component';

describe('ExamPreviewDialogComponent', () => {
  let component: ExamPreviewDialogComponent;
  let fixture: ComponentFixture<ExamPreviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamPreviewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamPreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
