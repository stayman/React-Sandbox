import _ from 'lodash';
import actionTypes from './action-types';
import reactor from '../reactor';


export const stepTo = function stepTo(step) {
  reactor.dispatch(actionTypes.STEP_TO, {step});
};
