const emailRegex = /^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/;

export const emailValidation = (term: string): boolean => {
  if (term && !emailRegex.test(term)) {
    return true;
  }
};
