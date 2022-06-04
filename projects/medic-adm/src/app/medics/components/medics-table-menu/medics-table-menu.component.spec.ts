import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsTableMenuComponent } from './medics-table-menu.component';

describe('MedicsTableMenuComponent', () => {
  let component: MedicsTableMenuComponent;
  let fixture: ComponentFixture<MedicsTableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsTableMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
