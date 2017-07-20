import { take, race, put, fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Notification from 'react-notification-system-redux';
import { push } from 'react-router-redux';

import { getLocalStorage, updateLocalStorageToken, removeLocalStorage } from 'services/localStorage';

import {
  LOGOUT,
  CHECK_AUTH,
  ALREADY_AUTH,
  LOGIN_RESPONSE,
  REGISTER_RESPONSE,
  SEND_CONFIRM_EMAIL_RESPONSE,
  RESET_PASSWORD_RESPONSE,
  CHANGE_PASSWORD_RESPONSE,
  loadMe,
  LOAD_ME_RESPONSE,
} from './actions';

function* checkAuthSaga() {
  yield takeEvery(CHECK_AUTH, function* checkAuthHandler() {
    const { token, user } = getLocalStorage();
    if (token && user) {
      yield put({
        type: ALREADY_AUTH,
        user,
      });
    }
  });
}

export function* authSaga() {
  yield fork(checkAuthSaga);
  yield put({ type: CHECK_AUTH });
  for (;;) {
    const {
      registerSuccess,
      loginSuccess,
      validateEmailSuccess,
      alreadyLogin,
      resetPasswordSuccess,
      changePasswordSuccess,
    } = yield race({
      registerSuccess: take(REGISTER_RESPONSE.SUCCESS),
      loginSuccess: take(LOGIN_RESPONSE.SUCCESS),
      validateEmailSuccess: take(SEND_CONFIRM_EMAIL_RESPONSE.SUCCESS),
      resetPasswordSuccess: take(RESET_PASSWORD_RESPONSE.SUCCESS),
      changePasswordSuccess: take(CHANGE_PASSWORD_RESPONSE.SUCCESS),
      alreadyLogin: take(ALREADY_AUTH),
    });

    if (registerSuccess || loginSuccess || validateEmailSuccess || resetPasswordSuccess || changePasswordSuccess) {
      const action = registerSuccess || loginSuccess || validateEmailSuccess || resetPasswordSuccess || changePasswordSuccess;
      updateLocalStorageToken(action.response.token);
      yield take(LOGOUT);
    } else if (alreadyLogin) {
      if (!getLocalStorage()) {
        yield put(Notification.error({ messageId: 'unkownError' }));
        yield put(LOGOUT);
      } else {
        yield put(loadMe());
        const { loadMeFailure } = yield race({ logout: take(LOGOUT), loadMeFailure: take(LOAD_ME_RESPONSE.FAILURE) });
        if (loadMeFailure && loadMeFailure.errors.status === 401) {
          yield put(Notification.error({ messageId: 'Votre session a expirée.' }));
        }
      }
    }
    removeLocalStorage();
    yield put(push('/'));
  }
}
