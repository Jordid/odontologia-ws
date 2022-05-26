import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith
} from 'rxjs/operators';
import {
  AutocompleteData,
  AutocompleteOptionData
} from './autocomplete-data.interface';

@Component({
  selector: 'odo-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnChanges, OnDestroy {
  @Input() autocompleteData: AutocompleteData;
  @Output() enteredTextEmit = new EventEmitter<string>();
  @Output() clearEmit = new EventEmitter<boolean>();

  options: AutocompleteOptionData[] = [];
  filteredOptions: Observable<AutocompleteOptionData[]>;
  counterFilteredOptions: number = 0;

  private fb = new FormBuilder();

  private autocompleteSkeleton = {
    searcher: [''],
  };

  public autocompleteForm: FormGroup = this.fb.group(this.autocompleteSkeleton);

  private subs: Subscription = new Subscription();

  ngOnChanges(changes: SimpleChanges): void {
    this.processData();

    this.filteredOptions = this.searcher.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      startWith(''),
      map((value) => this._filter(value))
    );

    this.searcher.valueChanges
      .pipe(debounceTime(900), distinctUntilChanged())
      .subscribe((value) => {
        if (!value || value.length < 1) {
          this.filteredOptions = null;
          this.options = [];
        }
        if (!this.autocompleteForm.pristine) {
          this.enteredTextEmit.emit(value);
          this.autocompleteForm.markAsPristine();
        }
      });

    this.subs.add(this.filteredOptions.subscribe(this.getFilteresOptions));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getFilteresOptions = (filteredOptions: any[]): void => {
    const value = this.searcher.value;
    if (value && value.length > 0) {
      this.counterFilteredOptions = filteredOptions
        ? filteredOptions.length
        : 0;
    }
  };

  processData(): void {
    this.options = this.autocompleteData?.optionsList;
  }

  private _filter(value: string): AutocompleteOptionData[] {
    const filterValue = value.toLowerCase();
    if (this.options?.length > 0) {
      return this.options.filter((option) =>
        option.value.toLowerCase().includes(filterValue)
      );
    } else {
      return [];
    }
  }

  get searcher(): AbstractControl {
    return this.autocompleteForm.get('searcher');
  }

  selectOption(): void {
    const value = this.searcher.value;
    const found = this.options.find((e) => e.value === value);
    if (found) {
      this.searcher.setValue(found.value);
    }
  }

  onClear(): void {
    this.searcher.setValue('');
    this.clearEmit.emit(true);
    this.enteredTextEmit.emit(null);
    this.counterFilteredOptions = 0;
    this.filteredOptions = null;
    this.options = [];
  }

  getTotalFound(): number {
    let lenght = 0;
    this.filteredOptions.subscribe((resp) => {
      return resp.length;
    });
    return lenght;
  }
}
