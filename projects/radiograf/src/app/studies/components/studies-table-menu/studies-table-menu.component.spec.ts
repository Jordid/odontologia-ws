import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesTableMenuComponent } from './studies-table-menu.component';

describe('StudiesTableMenuComponent', () => {
  let component: StudiesTableMenuComponent;
  let fixture: ComponentFixture<StudiesTableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesTableMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
