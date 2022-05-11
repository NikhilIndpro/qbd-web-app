import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface TwoStepLogInState {
  readonly default: any;
}

/* --- ACTIONS --- */
type TwoStepLogInActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = TwoStepLogInState;
type ContainerActions = TwoStepLogInActions;

export { ContainerState, ContainerActions };
