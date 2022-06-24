import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudyFormComponent } from './create-study-form.component';

describe('CreateStudyFormComponent', () => {
  let component: CreateStudyFormComponent;
  let fixture: ComponentFixture<CreateStudyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
