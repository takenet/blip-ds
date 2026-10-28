import { ptTerms, ptMonths, ptDays, ptMessages } from "./pt_BR";
import { esTerms, esMonths, esDays, esMessages } from "./es_ES";
import { enTerms, enMonths, enDays, enMessages } from "./en_US";
export const termTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
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
export const monthTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
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
export const dayTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
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
export const messageTranslate = (lang, string) => {
    let tranlate;
    switch (lang) {
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
