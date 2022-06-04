import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicFormComponent } from './create-medic-form.component';

describe('CreateMedicFormComponent', () => {
  let component: CreateMedicFormComponent;
  let fixture: ComponentFixture<CreateMedicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
