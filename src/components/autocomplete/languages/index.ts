import { ptTerms } from './pt_BR';
import { esTerms } from './es_ES';
import { enTerms } from './en_US';

export type languages = 'pt_BR' | 'es_ES' | 'en_US';

export const termTranslate = (lang: languages, key: string): string | undefined => {
  const terms =
    lang === 'en_US' ? enTerms :
    lang === 'es_ES' ? esTerms :
    ptTerms;

  return terms[key];
};
