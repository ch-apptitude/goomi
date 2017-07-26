/*
 *
 * Ui reducer
 *
 */
import React from 'react';
import { fromJS } from 'immutable';
import { TOOGLE_MODAL_OPEN, TOOGLE_STEPPER_OPEN, STEPPER_SET_STEP } from './actions';

const initialState = fromJS({
  modalOpen: false,
  modalParams: {
    title: '',
    content: <div />,
  },
  stepperOpen: false,
  stepperParams: {
    steps: [],
    activeStep: 0,
  },
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_MODAL_OPEN:
      return state.set('modalOpen', !state.get('modalOpen')).set('modalParams', fromJS(action.params));
    case TOOGLE_STEPPER_OPEN:
      return state.set('stepperOpen', !state.get('stepperOpen')).set('stepperParams', fromJS(action.params));
    case STEPPER_SET_STEP:
      return state.setIn(['stepperParams', 'activeStep'], fromJS(action.params));
    default:
      return state;
  }
};

export default uiReducer;
