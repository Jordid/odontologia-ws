import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtPiecesBlockComponent } from './secondt-pieces-block.component';

describe('SecondtPiecesBlockComponent', () => {
  let component: SecondtPiecesBlockComponent;
  let fixture: ComponentFixture<SecondtPiecesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondtPiecesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtPiecesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
