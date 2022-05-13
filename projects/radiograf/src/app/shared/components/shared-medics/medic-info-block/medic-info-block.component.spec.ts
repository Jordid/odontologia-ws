import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicInfoBlockComponent } from './medic-info-block.component';

describe('MedicInfoBlockComponent', () => {
  let component: MedicInfoBlockComponent;
  let fixture: ComponentFixture<MedicInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicInfoBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
