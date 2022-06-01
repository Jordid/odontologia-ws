import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPiecesBlockComponent } from './first-pieces-block.component';

describe('FirstPiecesBlockComponent', () => {
  let component: FirstPiecesBlockComponent;
  let fixture: ComponentFixture<FirstPiecesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPiecesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPiecesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
