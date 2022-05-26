export interface AutocompleteOptionData {
  code: string;
  value: string;
}
export interface AutocompleteData {
  optionsList: AutocompleteOptionData[];
  placeholder?: string;
  counterMessage?: string;
}
