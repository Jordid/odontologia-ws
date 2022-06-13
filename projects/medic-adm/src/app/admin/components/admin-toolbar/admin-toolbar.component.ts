import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OAuthStorageService } from '../../../auth/services/o-auth-storage.service';

@Component({
  selector: 'odo-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss'],
})
export class AdminToolbarComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<any>();

  avatarUrl: string;
  userName: string;

  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
    .pipe(map((result) => result.matches));

  constructor(
    private oauthStorageService: OAuthStorageService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    const user = this.oauthStorageService.getUser;
    if (user) {
      this.avatarUrl = user?.avatarUrl;
      this.userName = user?.name;
    }
  }

  toggleSidenav(): void {
    this.toggleEvent.emit(null);
  }
}
