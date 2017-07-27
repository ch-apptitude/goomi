import * as routingSaga from 'features/routing/sagas';
import * as uiSaga from 'features/ui/sagas';
/* apptitude IMPORT DO NOT TOUCH */

const injectSagas = (sagas, nestedSagas) =>
  nestedSagas.length && sagas.push(Object.keys(nestedSagas).map((key) => nestedSagas[key]()));

export default function* rootSaga() {
  const sagas = [];

  injectSagas(sagas, routingSaga);
  injectSagas(sagas, uiSaga);
  /* apptitude INJECT DO NOT TOUCH */

  yield sagas;
}
