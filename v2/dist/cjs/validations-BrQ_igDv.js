'use strict';

const emailRegex = /^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/;
const whitespaaceRegex = /\S/;
const phoneNumberRegex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
// const numberRegex = /^[0-9]*$/;
const dateRegex = /^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20|21)?[0-9]{2})*$/;
const emailValidation = (term) => {
    if (term && !emailRegex.test(term)) {
        return true;
    }
};
const numberValidation = (term) => {
    if (term && !phoneNumberRegex.test(term)) {
        return true;
    }
};
const whitespaceValidation = (term) => {
    return whitespaaceRegex.test(term);
};
const dateValidation = (term) => {
    return dateRegex.test(term);
};

exports.dateValidation = dateValidation;
exports.emailValidation = emailValidation;
exports.numberValidation = numberValidation;
exports.whitespaceValidation = whitespaceValidation;
