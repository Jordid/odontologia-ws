import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Params } from '@angular/router';
import { Observable, shareReplay, Subscription } from 'rxjs';
import { ClientsService } from '../../../../clients/services/clients.service';
import { IClient } from '../../../../clients/types/client.interface';
import {
  AutocompleteData,
  AutocompleteOptionData
} from '../autocomplete/autocomplete-data.interface';
@Component({
  selector: 'odo-clients-autocomplete',
  templateUrl: './clients-autocomplete.component.html',
  styleUrls: ['./clients-autocomplete.component.scss'],
})
export class ClientsAutocompleteComponent implements OnInit, OnDestroy {
  @Output() clientId = new EventEmitter<string>();

  private clients$: Observable<IClient[]> = this.clientsService
    .getClients$()
    .pipe(shareReplay(1));

  private subs: Subscription = new Subscription();
  autocompleteData: AutocompleteData = {} as AutocompleteData;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.subs.add(this.clients$.subscribe(this.getClients));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public getClients = (clients: IClient[]): void => {
    this.createAutocompleteData(clients);
  };

  createAutocompleteData(clients: IClient[]): void {
    const optionsList: AutocompleteOptionData[] =
      this.createOptionsList(clients);
    this.autocompleteData = {
      placeholder: 'Buscar cliente',
      optionsList: optionsList as AutocompleteOptionData[],
      counterMessage: 'pacientes encontrados',
    };
    this.parserData();
  }

  createOptionsList(clients: IClient[]): AutocompleteOptionData[] {
    const optionsList = [];
    if (clients?.length > 0) {
      for (const iterator of clients) {
        const newOption: AutocompleteOptionData = this.buildOption(iterator);
        if (newOption) {
          optionsList.push(newOption);
        }
      }
    }
    return optionsList;
  }

  buildOption(client: IClient): AutocompleteOptionData {
    let newOption: AutocompleteOptionData = null;
    if (client?.clientId) {
      const document = client?.person?.document;
      const names = this.getNames(client);
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
          code: client.clientId.toString(),
          value: value,
        };
      }
    }
    return newOption;
  }

  getNames(client: IClient): string {
    let names = null;
    if (client) {
      if (client?.person?.firstName && client?.person?.lastName) {
        names = client?.person?.firstName + ' ' + client?.person?.lastName;
      } else if (client?.person?.firstName) {
        names = client?.person?.firstName;
      } else if (client?.person?.lastName) {
        names = client?.person?.lastName;
      }
    }
    return names;
  }

  onEnteredTextChange(enteredText: string): void {
    if (enteredText) {
      const selectedClient = this.getSelectedClient(enteredText);
      this.clientId.emit(selectedClient?.code);
      if (selectedClient) {
        this.autocompleteData.optionsList = [];
        this.parserData();
      } else {
        const params: Params = {};
        params['search'] = enteredText;

        this.autocompleteData.optionsList = [];
        this.parserData();

        this.clientsService.getClients(params);
      }
    } else {
      this.clientId.emit(null);
    }
  }

  getSelectedClient(enteredText: string): AutocompleteOptionData {
    let selectedClient: AutocompleteOptionData = null;
    if (enteredText && this.autocompleteData.optionsList) {
      let filteredArray = this.autocompleteData.optionsList.filter(
        (option: AutocompleteOptionData) => option.value === enteredText
      );
      selectedClient = filteredArray?.length > 0 ? filteredArray[0] : null;
    }
    return selectedClient;
  }

  parserData(): void {
    const inString = JSON.stringify(this.autocompleteData);
    this.autocompleteData = JSON.parse(inString);
  }
}
