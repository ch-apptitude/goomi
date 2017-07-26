import { createSelector } from 'reselect';

export const selectLanguage = () => state => state.get('language');

export const selectLocale = () => createSelector(selectLanguage(), languageState => languageState.get('locale'));
