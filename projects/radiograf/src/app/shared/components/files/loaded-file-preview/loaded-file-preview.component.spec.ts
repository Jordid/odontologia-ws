import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedFilePreviewComponent } from './loaded-file-preview.component';

describe('LoadedFilePreviewComponent', () => {
  let component: LoadedFilePreviewComponent;
  let fixture: ComponentFixture<LoadedFilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadedFilePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedFilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
