import * as serviceApiSaga from 'services/api/sagas';

import * as userSaga from 'features/user/sagas';
import * as uiSaga from 'features/ui/sagas';
import * as routingSaga from 'features/routing/sagas';
/* apptitude IMPORT DO NOT TOUCH */

const injectSagas = (sagas, nestedSagas) =>
  nestedSagas.length && sagas.push(Object.keys(nestedSagas).map((key) => nestedSagas[key]()));

export default function* rootSaga() {
  const sagas = [];

  injectSagas(sagas, serviceApiSaga);
  injectSagas(sagas, userSaga);
  injectSagas(sagas, uiSaga);
  injectSagas(sagas, routingSaga);
  /* apptitude INJECT DO NOT TOUCH */

  yield sagas;
}
