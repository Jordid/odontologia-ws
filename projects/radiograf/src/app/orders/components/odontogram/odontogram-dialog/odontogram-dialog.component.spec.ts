import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontogramDialogComponent } from './odontogram-dialog.component';

describe('OdontogramDialogComponent', () => {
  let component: OdontogramDialogComponent;
  let fixture: ComponentFixture<OdontogramDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdontogramDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdontogramDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
