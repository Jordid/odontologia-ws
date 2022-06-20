import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Params } from '@angular/router';
import { Observable, shareReplay, Subscription } from 'rxjs';
import { MedicsService } from '../../../../medics/services/medics.service';
import { IMedic } from '../../../../medics/types/medic.interface';
import {
  AutocompleteData,
  AutocompleteOptionData
} from '../autocomplete/autocomplete-data.interface';

@Component({
  selector: 'odo-medics-autocomplete',
  templateUrl: './medics-autocomplete.component.html',
  styleUrls: ['./medics-autocomplete.component.scss'],
})
export class MedicsAutocompleteComponent implements OnInit, OnDestroy {
  @Input() disableInput: boolean;
  @Output() medicId = new EventEmitter<string>();

  private medics$: Observable<IMedic[]> = this.medicsService
    .getMedics$()
    .pipe(shareReplay(1));

  private subs: Subscription = new Subscription();
  autocompleteData: AutocompleteData = {} as AutocompleteData;

  constructor(private medicsService: MedicsService) {}

  ngOnInit(): void {
    this.subs.add(this.medics$.subscribe(this.getMedics));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public getMedics = (medics: IMedic[]): void => {
    this.createAutocompleteData(medics);
  };

  createAutocompleteData(medics: IMedic[]): void {
    const optionsList: AutocompleteOptionData[] =
      this.createOptionsList(medics);
    this.autocompleteData = {
      placeholder: 'Buscar médico',
      optionsList: optionsList as AutocompleteOptionData[],
      counterMessageSingular: 'médico encontrado',
      counterMessagePlural: 'médicos encontrados',
    };
    this.parserData();
  }

  createOptionsList(medics: IMedic[]): AutocompleteOptionData[] {
    const optionsList = [];
    if (medics?.length > 0) {
      for (const iterator of medics) {
        const newOption: AutocompleteOptionData = this.buildOption(iterator);
        if (newOption) {
          optionsList.push(newOption);
        }
      }
    }
    return optionsList;
  }

  buildOption(medic: IMedic): AutocompleteOptionData {
    let newOption: AutocompleteOptionData = null;
    if (medic?.doctorId) {
      const document = medic?.person?.document;
      const names = this.getNames(medic);
      let value = '';
      if (names && document) {
        value = document + ' - ' + names;
      } else if (names) {
        value = names;
      } else if (document) {
        value = document;
      }
      if (value) {
        newOption = {
          code: medic.doctorId.toString(),
          value: value,
        };
      }
    }
    return newOption;
  }

  getNames(medic: IMedic): string {
    let names = null;
    if (medic) {
      if (medic?.person?.firstName && medic?.person?.lastName) {
        names = medic?.person?.firstName + ' ' + medic?.person?.lastName;
      } else if (medic?.person?.firstName) {
        names = medic?.person?.firstName;
      } else if (medic?.person?.lastName) {
        names = medic?.person?.lastName;
      }
    }
    return names;
  }

  onEnteredTextChange(enteredText: string): void {
    if (enteredText) {
      const selectedMedic = this.getSelectedMedic(enteredText);
      this.medicId.emit(selectedMedic?.code);
      if (selectedMedic) {
        this.autocompleteData.optionsList = [];
        this.parserData();
      } else {
        const params: Params = {};
        params['search'] = enteredText;

        this.autocompleteData.optionsList = [];
        this.parserData();

        this.medicsService.getMedics(params);
      }
    } else {
      this.medicId.emit(null);
    }
  }

  getSelectedMedic(enteredText: string): AutocompleteOptionData {
    let selectedMedic: AutocompleteOptionData = null;
    if (enteredText && this.autocompleteData.optionsList) {
      let filteredArray = this.autocompleteData.optionsList.filter(
        (option: AutocompleteOptionData) => option.value === enteredText
      );
      selectedMedic = filteredArray?.length > 0 ? filteredArray[0] : null;
    }
    return selectedMedic;
  }

  parserData(): void {
    const inString = JSON.stringify(this.autocompleteData);
    this.autocompleteData = JSON.parse(inString);
  }
}
