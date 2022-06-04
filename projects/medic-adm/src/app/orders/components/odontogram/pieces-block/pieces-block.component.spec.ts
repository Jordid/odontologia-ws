import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesBlockComponent } from './pieces-block.component';

describe('PiecesBlockComponent', () => {
  let component: PiecesBlockComponent;
  let fixture: ComponentFixture<PiecesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiecesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
