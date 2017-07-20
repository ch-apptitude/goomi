import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

import { LOGOUT } from 'features/user/actions';

// Initial routing state
const routeInitialState = fromJS({ locationBeforeTransitions: null });

/**
 * Merge route into the global application state
 */
export default function routing(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({ locationBeforeTransitions: action.payload });
    case LOGOUT:
      return state; // TODO handle redirect on login
    default:
      return state;
  }
}
