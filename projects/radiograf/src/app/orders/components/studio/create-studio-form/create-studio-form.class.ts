import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

export class CreateStudioForm {
  private fb: FormBuilder = new FormBuilder();

  /* Skeleton del formulario de studio. */
  private createStudioSkeleton = {
    observation: [null],
  };

  submitting = false;

  /* Formulario de studio. */
  createStudioForm: FormGroup = this.fb.group(this.createStudioSkeleton);

  get observation(): AbstractControl {
    return this.getControlByName('observation');
  }

  get validatedForm(): boolean {
    return (
      this.createStudioForm.dirty &&
      this.createStudioForm.valid &&
      !this.submitting
    );
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.createStudioForm?.controls) {
      control = this.createStudioForm.get(controlName);
    }
    return control;
  }
}
