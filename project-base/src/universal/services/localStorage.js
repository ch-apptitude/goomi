import config from 'appConfig';

const userField = `${config.localStoragePrefix}User`;
const tokenField = `${config.localStoragePrefix}Token`;

export const getLocalStorage = () => {
  // SSR DEBUG
  let result = {};
  if (typeof window !== 'undefined' && localStorage.getItem(userField) !== 'undefined') {
    result = {
      token: localStorage.getItem(tokenField),
      user: localStorage.getItem(userField),
    };
    if (result.user) {
      result.user = JSON.parse(result.user);
    }
  }
  return result;
};

export const updateLocalStorageToken = (token) => {
  // SSR DEBUG
  if (typeof window !== 'undefined') {
    localStorage.setItem(tokenField, token);
  }
};

export const updateLocalStorageUser = (user) => {
  // SSR DEBUG
  if (typeof window !== 'undefined') {
    localStorage.setItem(userField, JSON.stringify(user));
  }
};

export const removeLocalStorage = () => {
  // SSR DEBUG
  if (typeof window !== 'undefined') {
    localStorage.removeItem(tokenField);
    localStorage.removeItem(userField);
  }
};
