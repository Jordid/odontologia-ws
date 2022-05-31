import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderPatientAndMedicPreviewComponent } from './oder-patient-and-medic-preview.component';

describe('OderPatientAndMedicPreviewComponent', () => {
  let component: OderPatientAndMedicPreviewComponent;
  let fixture: ComponentFixture<OderPatientAndMedicPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderPatientAndMedicPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderPatientAndMedicPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
