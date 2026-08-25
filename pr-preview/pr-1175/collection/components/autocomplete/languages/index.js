import { ptTerms } from './pt_BR';
import { esTerms } from './es_ES';
import { enTerms } from './en_US';
export const termTranslate = (lang, key) => {
  const terms = lang === 'en_US' ? enTerms :
    lang === 'es_ES' ? esTerms :
      ptTerms;
  return terms[key];
};
