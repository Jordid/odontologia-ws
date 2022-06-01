import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalPieceComponent } from './dental-piece.component';

describe('DentalPieceComponent', () => {
  let component: DentalPieceComponent;
  let fixture: ComponentFixture<DentalPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
