import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesListContainerComponent } from './files-list-container.component';

describe('FilesListContainerComponent', () => {
  let component: FilesListContainerComponent;
  let fixture: ComponentFixture<FilesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
