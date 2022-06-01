import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolarPieceComponent } from './molar-piece.component';

describe('MolarPieceComponent', () => {
  let component: MolarPieceComponent;
  let fixture: ComponentFixture<MolarPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolarPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolarPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
