import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MedicsService } from '../../../medics/services/medics.service';
import { SignUpForm } from './sign-up.-form';

@Component({
  selector: 'odo-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent extends SignUpForm implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();

  private submitting = false;

  constructor(private medicsService: MedicsService) {
    super();
  }

  ngOnInit(): void {
    //this.subs.add(this.oAuthService.getUser$().subscribe(this.getUser));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private enableLoading(): void {
    this.submitting = true;
  }

  private disableLoading(): void {
    this.submitting = false;
  }

  public onSubmit(): void {
    if (this.validatedForm) {
      this.medicsService.createMedic(this.registerMedicForm.getRawValue());
    }
  }

  private getUser = (user: any): void => {
    /* if (user?.userId) {
      this.allApp.router.navigate(['/auth/validate', user?.userId]);
    } else {
      this.disableLoading();
    } */
  };

  private showConfirmInfoDialog(): void {
    /* if (this.validatedForm) { */
    /*const registerJson: UserDataRegisterJson = {
        email: this.email.value,
        phone: this.phone.value,
      };

      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.width = '700px';
      matDialogConfig.maxWidth = '90vw';
      matDialogConfig.panelClass = 'style-close-dialog';
      matDialogConfig.autoFocus = false;
      matDialogConfig.data = registerJson;

      const dialog = this.allApp.dialog.open<
        ConfirmInfoSignUpDialogComponent,
        UserDataRegisterJson,
        boolean
      >(ConfirmInfoSignUpDialogComponent, matDialogConfig);

      this.subs.add(
        dialog.afterClosed().subscribe((confirmation) => {
          if (confirmation === true && this.validatedForm) {
            this.enableLoading();
            this.oAuthService.register(this.signUpForm.value);
            this.populateSignUpForm();
          }
        })
      );*/
    /*   } */
  }
}
