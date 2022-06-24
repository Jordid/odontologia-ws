import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { StudyTypeArray, StudyTypeEnum } from '../../../types/study-type.enum';

export class CreateStudyForm {
  private fb: FormBuilder = new FormBuilder();

  /* Skeleton del formulario de study. */
  private createStudySkeleton = {
    studyType: [null],
    observation: [null],
  };

  submitting = false;

  /* Formulario de study. */
  createStudyForm: FormGroup = this.fb.group(this.createStudySkeleton);

  get studyType(): AbstractControl {
    return this.getControlByName('studyType');
  }

  get observation(): AbstractControl {
    return this.getControlByName('observation');
  }

  get validatedForm(): boolean {
    return this.createStudyForm.valid && !this.submitting;
  }

  get StudyTypeArray(): StudyTypeEnum[] {
    return StudyTypeArray;
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.createStudyForm?.controls) {
      control = this.createStudyForm.get(controlName);
    }
    return control;
  }
}
