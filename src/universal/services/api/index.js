export const CALL_API = 'CALL_API';

export const createRequestTypes = (base) => {
  const res = {};
  //eslint-disable-next-line
  ['REQUEST', 'SUCCESS', 'FAILURE'].forEach((type) => (res[type] = `${base}_${type}`));
  return res;
};

export const action = (type, payload = {}) => ({
  type,
  ...payload,
});

export const responseBuilder = (entity) => ({
  request: () => action(entity.REQUEST),
  success: (response) => action(entity.SUCCESS, { response }),
  failure: (errors) => action(entity.FAILURE, { errors }),
});
