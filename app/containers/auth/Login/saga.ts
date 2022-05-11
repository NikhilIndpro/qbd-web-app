import * as Eff from 'redux-saga/effects';
import { LOGIN_USER} from './constants';

const call: any = Eff.call;
const takeLatest: any = Eff.takeLatest;
const all: any = Eff.all;

export function* watchUserAuthentication() {
  yield takeLatest(LOGIN_USER, userLogin);
}

// Individual exports for testing
function* 

export default function* loginSaga() {
  yield all([watchUserAuthentication()]);
}
