import { Component, OnInit } from '@angular/core';
import { OAuthStorageService } from '../../../auth/services/o-auth-storage.service';

@Component({
  selector: 'odo-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.scss'],
})
export class AdminToolbarComponent implements OnInit {
  avatarUrl: string;
  userName: string;

  constructor(private oauthStorageService: OAuthStorageService) {}

  ngOnInit(): void {
    const user = this.oauthStorageService.getUser;
    if (user) {
      this.avatarUrl = user?.avatarUrl;
      this.userName = user?.name;
    }
  }
}
