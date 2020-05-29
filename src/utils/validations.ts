const emailRegex = /^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/;
const whitespaaceRegex = /\S/;

export const emailValidation = (term: string): boolean => {
  if (term && !emailRegex.test(term)) {
    return true;
  }
};

export const whitespaceValidation = (term: string): boolean => {
  return whitespaaceRegex.test(term);
};
