/*
 *
 * Ui reducer
 *
 */
import React from 'react';
import { fromJS } from 'immutable';
import {} from './actions';

const initialState = fromJS({});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default uiReducer;
