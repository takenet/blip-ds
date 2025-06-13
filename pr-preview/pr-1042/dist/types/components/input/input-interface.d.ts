import { CounterTextRule } from '../counter-text/counter-text-interface';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'phonenumber' | 'date';
export type InputAutocapitalize = 'off' | 'none' | 'words' | 'on' | 'sentences' | 'characters';
export type InputAutoComplete = 'on' | 'off' | 'current-password' | 'new-password' | 'username';
export type InputCounterLengthRules = {
    warning: CounterTextRule;
    delete: CounterTextRule;
};
