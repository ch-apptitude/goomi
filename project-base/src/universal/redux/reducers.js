import { combineReducers } from 'redux-immutable';

import { reducer as notifications } from 'react-notification-system-redux';

import routing from 'features/routing/reducer';
import user from 'features/user/reducer';
import language from 'features/language/reducer';
import ui from 'features/ui/reducer';
/* apptitude IMPORT DO NOT TOUCH */

const currentReducers = {
  routing,
  language,
  notifications,
  user,
  ui,
  /* apptitude DECLARATION DO NOT TOUCH */
};

export default combineReducers({ ...currentReducers });
