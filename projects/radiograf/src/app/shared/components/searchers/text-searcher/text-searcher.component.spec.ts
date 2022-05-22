import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSearcherComponent } from './text-searcher.component';

describe('TextSearcherComponent', () => {
  let component: TextSearcherComponent;
  let fixture: ComponentFixture<TextSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
