import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiographyEditorComponent } from './radiography-editor.component';

describe('RadiographyEditorComponent', () => {
  let component: RadiographyEditorComponent;
  let fixture: ComponentFixture<RadiographyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiographyEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiographyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
