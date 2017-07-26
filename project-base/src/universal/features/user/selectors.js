import { createSelector } from 'reselect';

const selectUserDomain = () => (state) => state.get('user');

export const selectIsLog = () => createSelector(selectUserDomain(), (userStata) => userStata.get('isLogged')); // DOT NOT TOUCH NAMING selectIsLog -> selectIsLogged make confic with something..

export const selectUser = () =>
  createSelector(selectUserDomain(), (userState) => {
    if (userState.get('user')) {
      return userState.get('user').toJS();
    }
    return undefined;
  });

export const selectUserStatus = () =>
  createSelector(selectUserDomain(), (userState) => {
    if (userState.get('userStatus')) {
      return userState.get('userStatus').toJS();
    }
    return undefined;
  });
