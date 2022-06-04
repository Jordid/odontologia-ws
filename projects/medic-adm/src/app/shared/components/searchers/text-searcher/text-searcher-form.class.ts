import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ParamMap } from '@angular/router';

export class TextSearcherForm {
  private fb = new FormBuilder();

  private searchSkeleton = {
    search: [''],
  };

  public searchForm: FormGroup = this.fb.group(this.searchSkeleton);

  get search(): AbstractControl {
    return this.searchForm.get('search');
  }

  get dirtyValidForm(): boolean {
    return this.searchForm.dirty && this.searchForm.valid;
  }

  get canSearch(): boolean {
    return this.dirtyValidForm &&
      typeof this.search.value === 'string' &&
      this.search.value !== '' &&
      this.search.value !== null
      ? true
      : false;
  }

  get searchText(): string {
    return this.search.value.trim();
  }

  set searchText(value: string) {
    value = value.trim();
    if (value && typeof value === 'string') {
      this.search.setValue(value);
    } else {
      this.search.setValue('');
    }
  }

  public resetSearch(): void {
    this.searchText = '';
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    if (queryParamMap.has('search')) {
      this.searchText = queryParamMap.get('search');
    } else {
      this.resetSearch();
    }
  };
}
