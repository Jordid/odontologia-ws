import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPreviewCardComponent } from './total-preview-card.component';

describe('TotalPreviewCardComponent', () => {
  let component: TotalPreviewCardComponent;
  let fixture: ComponentFixture<TotalPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
