/*
 *
 * Login reducer
 *
 */

import { ContainerState, ContainerActions } from './types';
import { SET_IS_AUTHENTICATED , SET_LANGUAGE, WRONG_NAME_PASSWORD} from "./constants"
export const initialState: ContainerState = {
  isAuthenticated : false,
  language: [],
  inValidUser:true,
};

function loginReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
console.log("action",action);
  switch (action.type) {
   
    case SET_IS_AUTHENTICATED:
      return{
        ...state,
        isAuthenticated: false
      }

    case SET_LANGUAGE:
      return{
        ...state,
        language: action.payload
      }  

    case WRONG_NAME_PASSWORD:
      return{
        ...state,
        inValidUser:action.payload
      }  
    default:
      return state;
  }
}

export default loginReducer;
