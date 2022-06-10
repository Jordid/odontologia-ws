import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthStorageService } from '../../services/o-auth-storage.service';

@Component({
  selector: 'odo-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private oAuthStorage: OAuthStorageService
  ) {}

  ngOnInit(): void {
    this.oAuthStorage.reset();
    this.router.navigate([`/`]);
  }
}
