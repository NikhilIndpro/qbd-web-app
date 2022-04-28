import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface LoginState {
  isAuthenticated: boolean;
}

/* --- ACTIONS --- */
type LoginActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = LoginState;
type ContainerActions = LoginActions;

export { ContainerState, ContainerActions };
