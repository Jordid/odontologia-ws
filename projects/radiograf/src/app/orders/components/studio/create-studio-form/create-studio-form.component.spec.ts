import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudioFormComponent } from './create-studio-form.component';

describe('CreateStudioFormComponent', () => {
  let component: CreateStudioFormComponent;
  let fixture: ComponentFixture<CreateStudioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
