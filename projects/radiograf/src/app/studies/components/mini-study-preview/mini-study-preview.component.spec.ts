import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniStudyPreviewComponent } from './mini-study-preview.component';

describe('MiniStudyPreviewComponent', () => {
  let component: MiniStudyPreviewComponent;
  let fixture: ComponentFixture<MiniStudyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniStudyPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniStudyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
