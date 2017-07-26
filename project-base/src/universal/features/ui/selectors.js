import { createSelector } from 'reselect';

const selectUiDomain = () => state => state.get('ui');

export const selectModalOpen = () => createSelector(selectUiDomain(), substate => substate.get('modalOpen'));
export const selectModalParams = () => createSelector(selectUiDomain(), substate => substate.get('modalParams').toJS());

export const selectStepperOpen = () => createSelector(selectUiDomain(), substate => substate.get('stepperOpen'));
export const selectStepperParams = () => createSelector(selectUiDomain(), substate => substate.get('stepperParams').toJS());

export const selectNotifications = () => state => state.get('notifications');
