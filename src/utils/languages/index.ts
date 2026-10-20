import { ptTerms, ptMonths, ptDays, ptMessages } from './pt_BR';
import { esTerms, esMonths, esDays, esMessages } from './es_ES';
import { enTerms, enMonths, enDays, enMessages } from './en_US';

export type languageCanonical = 'pt_BR' | 'es_ES' | 'en_US';

/**
 * Accepted language values. Includes canonical codes as well as legacy and
 * short-form aliases that are mapped to a canonical code at runtime.
 *
 * Canonical: 'pt_BR' | 'es_ES' | 'en_US'
 * Legacy aliases (backward compat): 'es_MX'
 * Short forms: 'pt' | 'es' | 'en'
 */
export type languages = languageCanonical | 'es_MX' | 'pt' | 'es' | 'en';

/**
 * Normalizes any supported language value to one of the three canonical codes.
 * Language-family fallback: any unknown locale whose prefix matches a supported
 * family (e.g. 'es_AR', 'en_GB', 'pt_PT') is mapped to the canonical variant.
 * Defaults to 'pt_BR' when no match is found.
 */
export const normalizeLanguage = (lang: string): languageCanonical => {
  switch (lang) {
    case 'pt_BR':
    case 'pt':
      return 'pt_BR';
    case 'en_US':
    case 'en':
      return 'en_US';
    case 'es_ES':
    case 'es_MX':
    case 'es':
      return 'es_ES';
    default: {
      if (typeof lang === 'string') {
        if (lang.startsWith('es')) return 'es_ES';
        if (lang.startsWith('en')) return 'en_US';
        if (lang.startsWith('pt')) return 'pt_BR';
      }
      return 'pt_BR';
    }
  }
};

export const termTranslate = (lang: languages, string: string): string => {
  let tranlate;
  switch (normalizeLanguage(lang)) {
    case 'pt_BR':
      tranlate = ptTerms.map((term) => term[string]);
      break;
    case 'es_ES':
      tranlate = esTerms.map((term) => term[string]);
      break;
    case 'en_US':
      tranlate = enTerms.map((term) => term[string]);
      break;
    default:
      tranlate = ptTerms.map((term) => term[string]);
  }
  return tranlate;
};

export const monthTranslate = (lang: languages, string: string): string => {
  let tranlate;
  switch (normalizeLanguage(lang)) {
    case 'pt_BR':
      tranlate = ptMonths.map((term) => term[string]);
      break;
    case 'es_ES':
      tranlate = esMonths.map((term) => term[string]);
      break;
    case 'en_US':
      tranlate = enMonths.map((term) => term[string]);
      break;
    default:
      tranlate = ptMonths.map((term) => term[string]);
  }
  return tranlate;
};

export const dayTranslate = (lang: languages, string: string): string => {
  let tranlate;
  switch (normalizeLanguage(lang)) {
    case 'pt_BR':
      tranlate = ptDays.map((term) => term[string]);
      break;
    case 'es_ES':
      tranlate = esDays.map((term) => term[string]);
      break;
    case 'en_US':
      tranlate = enDays.map((term) => term[string]);
      break;
    default:
      tranlate = ptDays.map((term) => term[string]);
  }
  return tranlate;
};

export const messageTranslate = (lang: languages, string: string): string => {
  let tranlate;
  switch (normalizeLanguage(lang)) {
    case 'pt_BR':
      tranlate = ptMessages.map((term) => term[string]);
      break;
    case 'es_ES':
      tranlate = esMessages.map((term) => term[string]);
      break;
    case 'en_US':
      tranlate = enMessages.map((term) => term[string]);
      break;
    default:
      tranlate = ptMessages.map((term) => term[string]);
  }
  return tranlate;
};
