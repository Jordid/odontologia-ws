import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsInitComponent } from './medics-init.component';

describe('MedicsInitComponent', () => {
  let component: MedicsInitComponent;
  let fixture: ComponentFixture<MedicsInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
