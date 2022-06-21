import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesContainerComponent } from './upload-files-container.component';

describe('UploadFilesContainerComponent', () => {
  let component: UploadFilesContainerComponent;
  let fixture: ComponentFixture<UploadFilesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
