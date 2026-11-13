const emailRegex = /^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/;
const whitespaaceRegex = /\S/;
const phoneNumberRegex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
// const numberRegex = /^[0-9]*$/;
const dateRegex = /^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20|21)?[0-9]{2})*$/;
export const emailValidation = (term) => {
    if (term && !emailRegex.test(term)) {
        return true;
    }
};
export const numberValidation = (term) => {
    if (term && !phoneNumberRegex.test(term)) {
        return true;
    }
};
export const whitespaceValidation = (term) => {
    return whitespaaceRegex.test(term);
};
export const dateValidation = (term) => {
    return dateRegex.test(term);
};
export const maskDate = (term) => {
    let value = term;
    value = value.replace(/\D+/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1/$2');
    value = value.replace(/^(\d{2}\/\d{2})(\d)/, '$1/$2');
    return value;
};
