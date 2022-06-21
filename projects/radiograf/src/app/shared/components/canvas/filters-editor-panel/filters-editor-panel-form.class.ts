import {
  AbstractControl,
  FormBuilder,
  FormGroup
} from '@angular/forms';

export class FiltersEditorPanelForm {
  private fb: FormBuilder = new FormBuilder();

  private filtersEditorPanelSkeleton = {
    brillo: [null],
    contraste: [null],
    invertir: [null],
    sepia: [null],
  };

  filtersEditorPanelForm: FormGroup = this.fb.group(
    this.filtersEditorPanelSkeleton
  );

  get brillo(): AbstractControl {
    return this.getControlByName('brillo');
  }

  get contraste(): AbstractControl {
    return this.getControlByName('contraste');
  }

  get invertir(): AbstractControl {
    return this.getControlByName('invertir');
  }

  get sepia(): AbstractControl {
    return this.getControlByName('sepia');
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.filtersEditorPanelForm?.controls) {
      control = this.filtersEditorPanelForm.get(controlName);
    }
    return control;
  }
}
