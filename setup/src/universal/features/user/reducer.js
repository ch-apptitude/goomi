import { fromJS } from 'immutable';

import { formatInputUser } from 'services/formatters';
import { updateLocalStorageUser } from 'services/localStorage';

import {
  LOAD_ME_RESPONSE,
  LOGOUT,
  ALREADY_AUTH,
  LOGIN_RESPONSE,
  REGISTER_RESPONSE,
  USER_UPDATE_RESPONSE,
  SEND_CONFIRM_EMAIL_RESPONSE,
  RESET_PASSWORD_RESPONSE,
  CHANGE_PASSWORD_RESPONSE,
} from './actions';
import { USER_STATUS } from './constants';

const initialState = fromJS({
  isLogged: false,
  user: undefined,
  userStatus: fromJS([USER_STATUS.LOGGED_OUT]),
});

const getUserStatus = (user) => {
  const status = [];
  if (user) {
    status.push(USER_STATUS.LOGGED_IN);
    if (user.birthdate) {
      status.push(USER_STATUS.PROFILE_COMPLETE);
    }
    if (user.isVerified) {
      status.push(USER_STATUS.VERIFIED);
    }
  } else {
    status.push(USER_STATUS.LOGGED_OUT);
  }
  return status;
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ALREADY_AUTH: {
      const user = formatInputUser(action.user);
      return state.set('isLogged', true).set('user', fromJS(user)).set('userStatus', fromJS(getUserStatus(user)));
    }
    case LOAD_ME_RESPONSE.REQUEST:
      return state.set('userStatus', fromJS([USER_STATUS.LOADING]));
    case LOAD_ME_RESPONSE.SUCCESS:
    case REGISTER_RESPONSE.SUCCESS:
    case USER_UPDATE_RESPONSE.SUCCESS:
    case SEND_CONFIRM_EMAIL_RESPONSE.SUCCESS:
    case RESET_PASSWORD_RESPONSE.SUCCESS:
    case CHANGE_PASSWORD_RESPONSE.SUCCESS:
    case LOGIN_RESPONSE.SUCCESS: {
      updateLocalStorageUser(action.response.user);
      const user = formatInputUser(action.response.user);
      return state.set('isLogged', true).set('user', fromJS(user)).set('userStatus', fromJS(getUserStatus(user)));
    }
    case LOGOUT:
    case LOAD_ME_RESPONSE.FAILURE:
      return state.set('isLogged', false).set('user', fromJS()).set('userStatus', fromJS([USER_STATUS.LOGGED_OUT]));
    default:
      return state;
  }
}

export default userReducer;
