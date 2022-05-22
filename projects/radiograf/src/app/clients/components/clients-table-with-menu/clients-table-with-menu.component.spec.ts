import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTableWithMenuComponent } from './clients-table-with-menu.component';

describe('ClientsTableWithMenuComponent', () => {
  let component: ClientsTableWithMenuComponent;
  let fixture: ComponentFixture<ClientsTableWithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsTableWithMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTableWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
