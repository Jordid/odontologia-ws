import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontogramContainerComponent } from './odontogram-container.component';

describe('OdontogramContainerComponent', () => {
  let component: OdontogramContainerComponent;
  let fixture: ComponentFixture<OdontogramContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdontogramContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdontogramContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
