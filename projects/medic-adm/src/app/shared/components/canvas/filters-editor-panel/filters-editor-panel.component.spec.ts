import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersEditorPanelComponent } from './filters-editor-panel.component';

describe('FiltersEditorPanelComponent', () => {
  let component: FiltersEditorPanelComponent;
  let fixture: ComponentFixture<FiltersEditorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersEditorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersEditorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
