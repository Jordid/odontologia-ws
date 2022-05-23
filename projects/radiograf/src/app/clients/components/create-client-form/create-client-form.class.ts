import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GenderArray, GenderEnum } from '../../../core/types/gender.enum';
import { InputValidation } from '../../../core/utils/validations/input-validation';
import { PasswordValidator } from '../../../shared/validators/password.validator';
export class CreateClientForm {
  private fb: FormBuilder = new FormBuilder();
  private createClientSkeleton = {
    birthDate: ['', [Validators.required]],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    document: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
  };

  submitting = false;

  createClientForm: FormGroup = this.fb.group(this.createClientSkeleton, {
    validators: PasswordValidator.matchPassword,
  });

  get InputValidation(): any {
    return InputValidation;
  }

  get GenderArray(): GenderEnum[] {
    return GenderArray;
  }

  get birthDate(): AbstractControl {
    return this.getControlByName('birthDate');
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
    return (
      this.createClientForm.dirty &&
      this.createClientForm.valid &&
      !this.submitting
    );
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.createClientForm?.controls) {
      control = this.createClientForm.get(controlName);
    }
    return control;
  }
}
