import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadedImagePreviewComponent } from './loaded-image-preview.component';

describe('LoadedImagePreviewComponent', () => {
  let component: LoadedImagePreviewComponent;
  let fixture: ComponentFixture<LoadedImagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadedImagePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadedImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
