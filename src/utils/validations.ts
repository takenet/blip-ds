const emailRegex = /^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/;
const whitespaaceRegex = /\S/;
const numberRegex = /^[0-9]*$/;

export const emailValidation = (term: string): boolean => {
  if (term && !emailRegex.test(term)) {
    return true;
  }
};

export const numberValidation = (term: string): boolean => {
  if (term && !numberRegex.test(term)) {
    return true;
  }
};

export const whitespaceValidation = (term: string): boolean => {
  return whitespaaceRegex.test(term);
};
