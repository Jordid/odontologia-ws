import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesInitComponent } from './studies-init.component';

describe('StudiesInitComponent', () => {
  let component: StudiesInitComponent;
  let fixture: ComponentFixture<StudiesInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
