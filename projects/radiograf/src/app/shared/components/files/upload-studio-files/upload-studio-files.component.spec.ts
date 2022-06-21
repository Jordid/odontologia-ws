import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStudioFilesComponent } from './upload-studio-files.component';

describe('UploadStudioFilesComponent', () => {
  let component: UploadStudioFilesComponent;
  let fixture: ComponentFixture<UploadStudioFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadStudioFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadStudioFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
