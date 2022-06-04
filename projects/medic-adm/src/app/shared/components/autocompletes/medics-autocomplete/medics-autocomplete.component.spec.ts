import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicsAutocompleteComponent } from './medics-autocomplete.component';

describe('MedicsAutocompleteComponent', () => {
  let component: MedicsAutocompleteComponent;
  let fixture: ComponentFixture<MedicsAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicsAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
