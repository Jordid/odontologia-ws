import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { InputValidation } from '../../../../core/utils/validations/input-validation';
import {
  ExamCategoryArray,
  ExamCategoryEnum
} from '../../../types/exam-category.enum';
import {
  RadiographyTypeArray,
  RadiographyTypeEnum
} from '../../../types/radiography-type.enum';

export class CreateExamForm {
  private fb: FormBuilder = new FormBuilder();

  /* Skeleton del formulario de examen. */
  private createExamSkeleton = {
    examCatergory: [null, Validators.required],
    examType: [null],
    isAdditional: [false],
    price: [null, Validators.required],
    isAddStudio: [false],
    observation: [null],
  };

  submitting = false;

  /* Formulario de examen. */
  createExamForm: FormGroup = this.fb.group(this.createExamSkeleton);

  get InputValidation(): any {
    return InputValidation;
  }

  get ExamCategoryArray(): ExamCategoryEnum[] {
    return ExamCategoryArray;
  }

  get RadiographyTypeArray(): RadiographyTypeEnum[] {
    return RadiographyTypeArray;
  }

  get examCatergory(): AbstractControl {
    return this.getControlByName('examCatergory');
  }

  get examType(): AbstractControl {
    return this.getControlByName('examType');
  }

  get isAdditional(): AbstractControl {
    return this.getControlByName('isAdditional');
  }

  get price(): AbstractControl {
    return this.getControlByName('price');
  }

  get isAddStudio(): AbstractControl {
    return this.getControlByName('isAddStudio');
  }

  get observation(): AbstractControl {
    return this.getControlByName('observation');
  }

  get validatedForm(): boolean {
    return (
      this.createExamForm.dirty && this.createExamForm.valid && !this.submitting
    );
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.createExamForm?.controls) {
      control = this.createExamForm.get(controlName);
    }
    return control;
  }
}
