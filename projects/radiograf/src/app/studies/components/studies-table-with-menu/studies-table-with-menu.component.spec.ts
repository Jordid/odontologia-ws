import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesTableWithMenuComponent } from './studies-table-with-menu.component';

describe('StudiesTableWithMenuComponent', () => {
  let component: StudiesTableWithMenuComponent;
  let fixture: ComponentFixture<StudiesTableWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesTableWithMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesTableWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
