import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesConfig } from '../../../core/utils/images-config';

@Component({
  selector: 'odo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ImagesConfig = ImagesConfig;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.router.navigate(['/admin/clients']);
  }
}
