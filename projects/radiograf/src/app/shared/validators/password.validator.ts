import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  public static matchPassword(ac: AbstractControl) {
    const passwordControl = ac.get('password');
    const password = passwordControl ? passwordControl.value : null;
    const passwordConfirmationControl = ac.get('passwordConfirmation');
    const passwordConfirmation = passwordConfirmationControl
      ? passwordConfirmationControl.value
      : null;
    if (password !== passwordConfirmation) {
      const acVar = ac.get('passwordConfirmation');
      if (acVar) {
        acVar.setErrors({ matchPassword: true });
      }
    } else {
      return null;
    }
    return null;
  }
}
