/*
 *
 * Login reducer
 *
 */

import { ContainerState, ContainerActions } from './types';
import { SET_IS_AUTHENTICATED } from "./constants"
export const initialState: ContainerState = {
  isAuthenticated : false,
};

function loginReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action) {
   
    // case SET_IS_AUTHENTICATED:{
    //   return{
    //     ...state,
    //     isAuthenticated: action
    //   }
    
     

    default:
      return state;
  }
}

export default loginReducer;
