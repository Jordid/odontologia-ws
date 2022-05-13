import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarWithNameComponent } from './user-avatar-with-name.component';

describe('UserAvatarWithNameComponent', () => {
  let component: UserAvatarWithNameComponent;
  let fixture: ComponentFixture<UserAvatarWithNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvatarWithNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvatarWithNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
