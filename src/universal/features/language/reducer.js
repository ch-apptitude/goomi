import { fromJS } from 'immutable';
import moment from 'moment';

export const CHANGE_LOCALE = 'app/LanguageToggle/CHANGE_LOCALE';

const initialLanguage = 'fr';

const initialState = fromJS({ locale: initialLanguage });

moment.locale(initialLanguage);
moment.locale('en', {
  relativeTime: {
    past: '%s ',
  },
});

moment.locale(initialLanguage);
moment.locale('fr', {
  relativeTime: {
    past: '%s ',
  },
});

function languageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      moment.locale(action.locale);
      return state.set('locale', action.locale);
    default:
      return state;
  }
}

export default languageReducer;
