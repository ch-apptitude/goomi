import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import 'whatwg-fetch';
import config from 'appConfig';
import { getLocalStorage } from '../localStorage';

import { responseBuilder } from './index';

const PROXY_ROOT = config.url;

console.log('PROXY_ROOT', PROXY_ROOT); //eslint-disable-line

export function* apiSagaCatch() {
  yield takeEvery('CALL_API', apiCallHandler);
}

function* apiCallHandler({ endpoint, method, body, callType, params, query, deffered, hasFile }) {
  let url = endpoint;
  if (params) {
    // TODO check if get else throw Error
    url = parametredEndpoint(url, params);
  }
  if (query) {
    url = queriedEndpoint(url, query);
  }

  const apiFnc = () => callApi(url, method, body, callType, hasFile);
  return yield fetchEntity(callType, apiFnc, deffered);
}

function* fetchEntity(entity, apiFn, deffered) {
  const resp = responseBuilder(entity);
  yield put(resp.request());
  const { response, error } = yield call(apiFn);

  if (response) {
    if (deffered) {
      deffered.resolve(response);
    }
    yield put(resp.success(response));
  } else {
    if (deffered) {
      deffered.reject(error);
    }
    yield put(resp.failure(error));
  }
}

const callApi = (endpoint, method = 'GET', bodyJS = null, callType = null, hasFile = false) => {
  const request = createRequest(endpoint, method, bodyJS, hasFile);

  return fetch(request.url, request.params)
    .then((response) => {
      if (response.status === 204) {
        return Promise.resolve({
          json: {},
          response,
        });
      }
      return response.json().then((json) => ({
        json,
        response,
      }));
    })
    .then(({ json, response }) => {
      if (callType !== null) {
        console.groupCollapsed('[CALL API]', method, `/${endpoint} >`, callType.REQUEST); //eslint-disable-line
        groupLog('REQUEST', request, bodyJS);
        groupLog('RESPONSE', callType.SUCCESS, response);
        groupLog('ERROR', callType.FAILURE, response.err);
        groupLog('json', json);
        console.groupEnd(); //eslint-disable-line
      }
      if (typeof window !== 'undefined') {
        window.timestamp = new Date(response.headers.get('Date'));
      }

      if (!response.ok) {
        return Promise.reject(json);
      }
      if (Array.isArray(json)) {
        return json;
      }
      return Object.assign({}, json);
    })
    .then((response) => ({ response }), (error) => ({ error }));
};

const createRequest = (endpoint, method, bodyJS, hasFile) => {
  const fullUrl = endpoint.indexOf(PROXY_ROOT) - 1 ? `${PROXY_ROOT}/${endpoint}` : endpoint;
  let body;
  const headers = {};
  if (bodyJS !== null) {
    if (hasFile) {
      body = objectToFormData(bodyJS);
    } else {
      body = JSON.stringify(bodyJS);
      headers.Accept = 'application/json';
      headers['Content-Type'] = 'application/json';
    }
  }
  headers.Accept = 'application/json';
  headers['Access-Control-Request-Headers'] = '*';
  headers['Access-Control-Expose-Headers'] = '*';

  // TODO if on server side remove this
  const { token } = getLocalStorage();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return {
    url: fullUrl,
    params: {
      method,
      credentials: 'include',
      headers,
      body,
    },
  };
};

const groupLog = (type, ...etc) => {
  console.group(type); //eslint-disable-line
  etc.map((e) => e && console.log(e)); //eslint-disable-line
  console.groupEnd(); //eslint-disable-line
};

const parametredEndpoint = (baseUrl, params) => [baseUrl, Object.keys(params).map((key) => `/${params[key]}`).join('')].join('');
const queriedEndpoint = (baseUrl, query) =>
  [
    baseUrl,
    Object.keys(query)
      .map((key) => {
        let result;
        if (Array.isArray(query[key])) {
          result = query[key].map((value) => `${key}=${value}`).join('&');
        } else {
          result = `${key}=${query[key]}`;
        }
        return result;
      })
      .join('&'), // join('&'),
  ].join('?'); // join('&'),

const objectToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;

  /* eslint-disable */
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      /* eslint-enable */
      if (namespace) {
        formKey = `${namespace}[${property}]`;
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File,
      // use recursivity.
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, property);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
};
