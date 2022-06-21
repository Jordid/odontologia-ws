import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiltersEditorPanelForm } from './filters-editor-panel-form.class';

const BRIGHTNESS_STRING = 'brightness';
const CONSTRAST_STRING = 'contrast';
const INVERTIR_STRING = 'invert';
const SEPIA_STRING = 'sepia';

const OPEN_PARENTHESIS = '(';
const CLOSED_PARENTHESIS = ')';

@Component({
  selector: 'odo-filters-editor-panel',
  templateUrl: './filters-editor-panel.component.html',
  styleUrls: ['./filters-editor-panel.component.scss'],
})
export class FiltersEditorPanelComponent
  extends FiltersEditorPanelForm
  implements OnInit
{
  //public filtersString = ''; //brightness(0.5) blur(1px) contrast(0.5)';
  @Output() filters = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.filtersEditorPanelForm.valueChanges.subscribe((value) => {
      this.buildFiltersString();
    });
  }

  buildFiltersString(): void {
    let brilloValue = this.brillo.value;
    let constrasteValue = this.contraste.value;
    let invertirValue = this.invertir.value;
    let sepiaValue = this.sepia.value;

    let filtersAcum: string = null;
    if (brilloValue) {
      filtersAcum = this.buildStringWithValue(BRIGHTNESS_STRING, brilloValue);
    }
    if (constrasteValue) {
      constrasteValue = this.buildStringWithValue(
        CONSTRAST_STRING,
        constrasteValue
      );
      if (filtersAcum) {
        filtersAcum = filtersAcum + ' ' + constrasteValue;
      } else {
        filtersAcum = constrasteValue;
      }
    }
    if (invertirValue) {
      invertirValue = this.buildStringWithValue(INVERTIR_STRING, invertirValue);
      if (filtersAcum) {
        filtersAcum = filtersAcum + ' ' + invertirValue;
      } else {
        filtersAcum = invertirValue;
      }
    }
    if (sepiaValue) {
      sepiaValue = this.buildStringWithValue(SEPIA_STRING, sepiaValue);
      if (filtersAcum) {
        filtersAcum = filtersAcum + ' ' + sepiaValue;
      } else {
        filtersAcum = sepiaValue;
      }
    }
    this.filters.emit(filtersAcum);
  }

  buildStringWithValue(key: string, value: number): string {
    let result = null;
    if (key && value) {
      result = key
        .concat(OPEN_PARENTHESIS)
        .concat(value.toString())
        .concat(CLOSED_PARENTHESIS);
    }
    return result;
  }

  onBrilloChange(value: string): void {
    this.brillo.setValue(value);
  }

  onContrasteChange(value: string): void {
    this.contraste.setValue(value);
  }

  onInvertirChange(value: string): void {
    this.invertir.setValue(value);
  }

  onSepiaChange(value: string): void {
    this.sepia.setValue(value);
  }
}
