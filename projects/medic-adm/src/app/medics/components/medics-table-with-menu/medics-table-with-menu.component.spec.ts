import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsTableWithMenuComponent } from './medics-table-with-menu.component';

describe('MedicsTableWithMenuComponent', () => {
  let component: MedicsTableWithMenuComponent;
  let fixture: ComponentFixture<MedicsTableWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsTableWithMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsTableWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
