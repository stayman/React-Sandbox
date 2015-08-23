import {Store, toImmutable} from 'nuclear-js';
import actionTypes from './action-types';

export const stepStore = Store({
  getInitialState() {
    return toImmutable({
      step: 1
    });
  },

  initialize() {
    this.on(actionTypes.STEP_TO, setStep)
  }
});

function setStep(state, {step}) {
  return state.merge(step);
}
