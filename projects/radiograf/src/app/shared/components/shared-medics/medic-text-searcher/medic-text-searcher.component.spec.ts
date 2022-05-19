import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicTextSearcherComponent } from './medic-text-searcher.component';

describe('MedicTextSearcherComponent', () => {
  let component: MedicTextSearcherComponent;
  let fixture: ComponentFixture<MedicTextSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicTextSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicTextSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
