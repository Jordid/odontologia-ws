import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePreviewWithActionsComponent } from './file-preview-with-actions.component';

describe('FilePreviewWithActionsComponent', () => {
  let component: FilePreviewWithActionsComponent;
  let fixture: ComponentFixture<FilePreviewWithActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilePreviewWithActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePreviewWithActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
