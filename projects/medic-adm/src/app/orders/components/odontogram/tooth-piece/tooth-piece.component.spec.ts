import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothPieceComponent } from './tooth-piece.component';

describe('ToothPieceComponent', () => {
  let component: ToothPieceComponent;
  let fixture: ComponentFixture<ToothPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToothPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
