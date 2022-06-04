import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsInitComponent } from './clients-init.component';

describe('ClientsInitComponent', () => {
  let component: ClientsInitComponent;
  let fixture: ComponentFixture<ClientsInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
