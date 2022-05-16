import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsTableComponent } from './medics-table.component';

describe('MedicsTableComponent', () => {
  let component: MedicsTableComponent;
  let fixture: ComponentFixture<MedicsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
