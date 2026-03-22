import { ptTerms } from './pt_BR';
import { esTerms } from './es_ES';
import { enTerms } from './en_US';

export type languages = 'pt_BR' | 'es_ES' | 'en_US';

export const termTranslate = (lang: languages, string: string): string => {
  let translate;
  switch (lang) {
    case 'pt_BR':
      translate = ptTerms.map((term) => term[string]);
      break;
    case 'es_ES':
      translate = esTerms.map((term) => term[string]);
      break;
    case 'en_US':
      translate = enTerms.map((term) => term[string]);
      break;
    default:
      translate = ptTerms.map((term) => term[string]);
  }
  return translate;
};
