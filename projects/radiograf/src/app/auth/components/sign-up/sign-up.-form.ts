import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GenderArray, GenderEnum } from '../../../core/types/gender/gender.enum';
import { InputValidation } from '../../../core/utils/validations/input-validation';
import { PasswordValidator } from '../../../shared/validators/password.validator';

export class SignUpForm {
  private fb: FormBuilder = new FormBuilder();
  private signUpSkeleton = {
    firstName: ['', Validators.required, Validators.minLength(3)],
    lastName: ['', Validators.required, Validators.minLength(3)],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    document: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
  };

  registerMedicForm: FormGroup = this.fb.group(this.signUpSkeleton, {
    validators: PasswordValidator.matchPassword,
  });

  get InputValidation(): any {
    return InputValidation;
  }

  get GenderArray(): GenderEnum[] {
    return GenderArray;
  }

  get firstName(): AbstractControl {
    return this.getControlByName('firstName');
  }

  get lastName(): AbstractControl {
    return this.getControlByName('lastName');
  }

  get gender(): AbstractControl {
    return this.getControlByName('gender');
  }

  get email(): AbstractControl {
    return this.getControlByName('email');
  }
  get document(): AbstractControl {
    return this.getControlByName('document');
  }

  get validatedForm(): boolean {
    return true; //this.signUpForm.dirty && this.signUpForm.valid;
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.registerMedicForm?.controls) {
      control = this.registerMedicForm.get(controlName);
    }
    return control;
  }
}
