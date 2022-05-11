/*
 *
 * TwoStepLogIn
 *
 */

import React from 'react';

import { useInjectReducer } from 'redux-injectors';

import reducer from './reducer';



interface Props {}

function TwoStepLogIn(props: Props) {
  useInjectReducer({ key: 'twoStepLogIn', reducer: reducer });

  return <div>twoStepLogIn </div>;
}

export default TwoStepLogIn;
