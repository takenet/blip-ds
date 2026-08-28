import { ptTerms } from './pt_BR';
import { esTerms } from './es_ES';
import { enTerms } from './en_US';
import { languages, normalizeLanguage } from '../../../utils/languages';

export type { languages };

export const termTranslate = (lang: languages, key: string): string | undefined => {
  const canonical = normalizeLanguage(lang);
  const terms =
    canonical === 'en_US' ? enTerms :
    canonical === 'es_ES' ? esTerms :
    ptTerms;

  return terms[key];
};
