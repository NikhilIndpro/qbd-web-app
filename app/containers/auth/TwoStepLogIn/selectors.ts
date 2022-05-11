import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the twoStepLogIn state domain
 */

const selectTwoStepLogInDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TwoStepLogIn
 */

const makeSelectTwoStepLogIn = () =>
  createSelector(selectTwoStepLogInDomain, substate => substate);

export default makeSelectTwoStepLogIn;
export { selectTwoStepLogInDomain };
