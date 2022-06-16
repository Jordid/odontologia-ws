import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamFormComponent } from './create-exam-form.component';

describe('CreateExamFormComponent', () => {
  let component: CreateExamFormComponent;
  let fixture: ComponentFixture<CreateExamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
