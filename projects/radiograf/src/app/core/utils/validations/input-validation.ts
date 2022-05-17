import { AbstractControl } from '@angular/forms';

export class InputValidation {
  public static checkInputErrors(ac: AbstractControl): boolean {
    return ac.invalid && (ac.dirty || ac.touched);
  }

  public static counterLength(
    ac: AbstractControl,
    maxlength: number = 0
  ): string {
    if (ac && ac.value && ac.value.length) {
      return (ac.value.length || 0) + '/' + maxlength;
    } else {
      return 0 + '/' + maxlength;
    }
  }
}
