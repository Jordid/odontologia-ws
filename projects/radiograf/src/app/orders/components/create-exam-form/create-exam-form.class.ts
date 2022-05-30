import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GenderEnum } from '../../../core/types/gender.enum';
import { InputValidation } from '../../../core/utils/validations/input-validation';
import {
  ExamCategoryArray,
  ExamCategoryEnum,
} from '../../types/exam-category.enum';
import {
  RadiographyTypeArray,
  RadiographyTypeEnum,
} from '../../types/radiography-type.enum';

export class CreateExamForm {
  private fb: FormBuilder = new FormBuilder();

  /* Skeleton del formulario de radiografía. */
  private createRadiographySkeleton = {
    examCatergory: ['', Validators.required],
    examType: [''],
    isAditional: [''],
    price: ['', Validators.required],
    isAddStudio: [''],
  };

  submitting = false;

  /* Formulario de radiografía. */
  createRadiographyForm: FormGroup = this.fb.group(
    this.createRadiographySkeleton
  );

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

  get isAditional(): AbstractControl {
    return this.getControlByName('isAditional');
  }

  get price(): AbstractControl {
    return this.getControlByName('price');
  }

  get isAddStudio(): AbstractControl {
    return this.getControlByName('isAddStudio');
  }

  get validatedForm(): boolean {
    return (
      this.createRadiographyForm.dirty &&
      this.createRadiographyForm.valid &&
      !this.submitting
    );
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.createRadiographyForm?.controls) {
      control = this.createRadiographyForm.get(controlName);
    }
    return control;
  }
}
