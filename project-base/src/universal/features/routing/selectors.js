// import { createSelector } from 'reselect';

// const selectRouting = () => (state) => state.get('routing').toJS();
// export const selectActualLocation = () => createSelector(selectRouting(), (subDomaine) => subDomaine.get('locationBeforeTransitions'));

export const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return state => {
    const routingState = state.get('routing'); // or state.routing

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};
