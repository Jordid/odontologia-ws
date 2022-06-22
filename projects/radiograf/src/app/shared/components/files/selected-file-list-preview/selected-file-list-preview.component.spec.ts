import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFileListPreviewComponent } from './selected-file-list-preview.component';

describe('SelectedFileListPreviewComponent', () => {
  let component: SelectedFileListPreviewComponent;
  let fixture: ComponentFixture<SelectedFileListPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedFileListPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedFileListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
