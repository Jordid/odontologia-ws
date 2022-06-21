import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFileInputComponent } from './selector-file-input.component';

describe('SelectorFileInputComponent', () => {
  let component: SelectorFileInputComponent;
  let fixture: ComponentFixture<SelectorFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
