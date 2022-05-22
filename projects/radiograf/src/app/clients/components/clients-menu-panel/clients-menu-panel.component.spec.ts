import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsMenuPanelComponent } from './clients-menu-panel.component';

describe('ClientsMenuPanelComponent', () => {
  let component: ClientsMenuPanelComponent;
  let fixture: ComponentFixture<ClientsMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsMenuPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
