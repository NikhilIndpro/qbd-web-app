/*
 *
 * Login actions
 *
 */

import { action } from 'typesafe-actions';
import {} from './types';

import {LOGIN_USER, SET_IS_AUTHENTICATED } from './constants';

export const loginUserAction = (user:object) => {
    return {
      type: LOGIN_USER,
      user
    }
}

// export const logoutUserAction = (payload:boolean) => {
//     return {
//         type: SET_IS_AUTHENTICATED,
//         payload
//     }
// }