import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideInitComponent } from './outside-init.component';

describe('OutsideInitComponent', () => {
  let component: OutsideInitComponent;
  let fixture: ComponentFixture<OutsideInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
