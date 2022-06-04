import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicFormComponent } from './update-medic-form.component';

describe('UpdateMedicFormComponent', () => {
  let component: UpdateMedicFormComponent;
  let fixture: ComponentFixture<UpdateMedicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
