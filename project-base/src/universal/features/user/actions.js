import { CALL_API, createRequestTypes } from 'services/api';
import { formatOutputUser } from 'services/formatters';

export const LOGOUT = 'app/user/LOGOUT';
export const CHECK_AUTH = 'app/user/CHECK_AUTH';
export const ALREADY_AUTH = 'app/user/ALREADY_AUTH';
export const ADD_REGISTER_DATA = 'app/user/ADD_REGISTER_DATA';

export const LOGIN_RESPONSE = createRequestTypes('LOGIN_RESPONSE');
export const login = (body, deffered) => ({
  type: CALL_API,
  endpoint: 'auth/login-local',
  method: 'POST',
  body,
  callType: LOGIN_RESPONSE,
  deffered,
});

export const REGISTER_RESPONSE = createRequestTypes('REGISTER_RESPONSE');
export const register = (body, deffered) => ({
  type: CALL_API,
  endpoint: 'users',
  method: 'POST',
  body,
  callType: REGISTER_RESPONSE,
  deffered,
});

export const USER_UPDATE_RESPONSE = createRequestTypes('USER_UPDATE_RESPONSE');
export const updateUser = (values, deffered) => ({
  type: CALL_API,
  endpoint: 'users',
  method: 'PUT',
  body: formatOutputUser(values),
  deffered,
  hasFile: true,
  callType: USER_UPDATE_RESPONSE,
});

export const logout = () => ({ type: LOGOUT });

export const LOAD_ME_RESPONSE = createRequestTypes('LOAD_ME_RESPONSE');
export const loadMe = () => ({
  type: CALL_API,
  endpoint: 'users/me',
  method: 'GET',
  callType: LOAD_ME_RESPONSE,
});

/* ================================================================================================================
 *
 *                                                    ACCOUNT VALIDATION
 *
 * ================================================================================================================
 */
export const SEND_ASK_CONFIRM_EMAIL_RESPONSE = createRequestTypes('SEND_ASK_CONFIRM_EMAIL_RESPONSE');
export const sendNewConfirmEmail = (deffered) => ({
  type: CALL_API,
  endpoint: 'users/re-ask-token',
  method: 'POST',
  callType: SEND_ASK_CONFIRM_EMAIL_RESPONSE,
  deffered,
});

export const SEND_CONFIRM_EMAIL_RESPONSE = createRequestTypes('SEND_CONFIRM_EMAIL_RESPONSE');
export const sendConfirmEmail = (token, deffered) => ({
  type: CALL_API,
  endpoint: 'users/validate',
  method: 'POST',
  query: { token },
  callType: SEND_CONFIRM_EMAIL_RESPONSE,
  deffered,
});

/* ================================================================================================================
 *
 *                                                    PASSWORD
 *
 * ================================================================================================================
 */
export const RESET_PASSWORD_RESPONSE = createRequestTypes('RESET_PASSWORD_RESPONSE');
export const resetPassword = (values, token, deffered) => ({
  type: CALL_API,
  endpoint: 'users/reset-password',
  method: 'POST',
  body: values,
  query: { token },
  callType: RESET_PASSWORD_RESPONSE,
  deffered,
});

export const CHANGE_PASSWORD_RESPONSE = createRequestTypes('CHANGE_PASSWORD_RESPONSE');
export const changePassword = (values, deffered) => ({
  type: CALL_API,
  endpoint: 'users/change-password',
  method: 'POST',
  body: values,
  callType: CHANGE_PASSWORD_RESPONSE,
  deffered,
});

export const FORGOT_PASSWORD_RESPONSE = createRequestTypes('FORGOT_PASSWORD_RESPONSE');
export const forgotPassword = (values, deffered) => ({
  type: CALL_API,
  endpoint: 'users/forgot-password',
  method: 'POST',
  body: values,
  callType: FORGOT_PASSWORD_RESPONSE,
  deffered,
});
