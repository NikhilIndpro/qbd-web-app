/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import loginReducer from '../app/containers/auth/Login/reducer'
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer() {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    loginReducer
  });

  return rootReducer;
}
