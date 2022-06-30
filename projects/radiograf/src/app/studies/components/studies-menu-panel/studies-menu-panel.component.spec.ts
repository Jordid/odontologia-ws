import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesMenuPanelComponent } from './studies-menu-panel.component';

describe('StudiesMenuPanelComponent', () => {
  let component: StudiesMenuPanelComponent;
  let fixture: ComponentFixture<StudiesMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesMenuPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
