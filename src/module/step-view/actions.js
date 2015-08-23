import _ from 'lodash';
import actionTypes from './action-types';
import {dispatch} from '../reactor';


export const stepTo = function stepTo(step) {
  dispatch(actionTypes.STEP_TO, {step});
};
