import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Notification from 'react-notification-system-redux';
import { LOGIN_RESPONSE, REGISTER_RESPONSE, USER_UPDATE_RESPONSE, CHANGE_PASSWORD_RESPONSE } from 'features/user/actions';

function* UnexpectedError() {
  yield put(Notification.error({ messageId: 'networkError' }));
}

export function* notifyApiError(action) {
  if (action && !action.errors) {
    // this is a network error
    yield UnexpectedError();
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN_RESPONSE.FAILURE, notifyApiError);
}

export function* watchRegister() {
  yield takeEvery(REGISTER_RESPONSE.FAILURE, notifyApiError);
}

export function* watchUserUpdate() {
  yield takeEvery(USER_UPDATE_RESPONSE.FAILURE, notifyApiError);
}

export function* watchPostSuccess() {
  yield [
    takeEvery(USER_UPDATE_RESPONSE.SUCCESS, showNotification),
    takeEvery(CHANGE_PASSWORD_RESPONSE.SUCCESS, showNotification),
  ];
}

function* showNotification(action) {
  yield put(Notification.success({ messageId: action.type, noHeader: true }));
}
