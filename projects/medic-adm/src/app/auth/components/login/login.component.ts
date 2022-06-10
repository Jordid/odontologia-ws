import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImagesConfig } from '../../../core/utils/images-config';
import { InputValidation } from '../../../core/utils/validations/input-validation';
import { ProgressBarService } from '../../../shared/services/progress-bar/progress-bar.service';
import { OAuthService } from '../../services/o-auth.service';
import { OAuth } from '../../types/o-auth';

@Component({
  selector: 'odo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  ImagesConfig = ImagesConfig;

  public loginForm: FormGroup;
  private loginSkeleton = {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  };

  private submitting = false;

  private subs: Subscription = new Subscription();

  constructor(
    private progressBarService: ProgressBarService,
    private fb: FormBuilder,
    private oAuthService: OAuthService,
    private router: Router
  ) {
    this.createLoginForm();
  }

  ngOnInit(): void {
    this.subs.add(this.oAuthService.getOAuth$().subscribe(this.getOAuth));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private enableLoading(): void {
    this.progressBarService.show();
    this.submitting = true;
  }

  private disableLoading(): void {
    this.progressBarService.hide();
    this.submitting = false;
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group(this.loginSkeleton);
  }

  get InputValidation(): any {
    return InputValidation;
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  get validatedForm(): boolean {
    return this.loginForm.dirty && this.loginForm.valid && !this.submitting;
  }

  public onSubmit(): void {
    if (this.validatedForm) {
      this.enableLoading();
      this.oAuthService.login(this.loginForm.getRawValue());
    }
  }

  private getOAuth = (oAuth: OAuth): void => {
    if (oAuth) {
      this.router.navigate(['/admin/clients']);
    } else {
      this.disableLoading();
    }
  };
}
