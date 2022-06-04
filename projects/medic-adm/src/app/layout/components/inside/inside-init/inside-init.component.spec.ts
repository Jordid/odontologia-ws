import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideInitComponent } from './inside-init.component';

describe('InsideInitComponent', () => {
  let component: InsideInitComponent;
  let fixture: ComponentFixture<InsideInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
