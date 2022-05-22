import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTableMenuComponent } from './clients-table-menu.component';

describe('ClientsTableMenuComponent', () => {
  let component: ClientsTableMenuComponent;
  let fixture: ComponentFixture<ClientsTableMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsTableMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
