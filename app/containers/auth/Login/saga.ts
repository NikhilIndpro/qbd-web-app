import * as Eff from 'redux-saga/effects';

import { LOGIN_USER} from './constants';
import { setBearerToken } from '../../../commonUtils/auth';
import { api, apiEndPoints } from '../../../api';

const call: any = Eff.call;
const takeLatest: any = Eff.takeLatest;
const all: any = Eff.all;

export function* watchUserAuthentication() {
  yield takeLatest(LOGIN_USER, userLogin);
}

// Individual exports for testing
function* userLogin(payload) {
  const logIn = () => {

    return api
      .post(apiEndPoints.logIn, JSON.stringify(payload.user))
      .then(res => res)
      .catch(err => {
        throw err;
      });
  };
  try {

    const response = yield call(logIn);
    const { accessToken } = response.data;
    setBearerToken(accessToken);

  } catch (err) {
    console.log(err);
  }
}

export default function* loginSaga() {
  yield all([watchUserAuthentication()]);
}
