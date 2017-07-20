import { CHANGE_LOCALE } from './reducer';

export const changeLocale = languageLocale => ({
  type: CHANGE_LOCALE,
  locale: languageLocale,
});
