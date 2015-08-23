import {toImmutable, Immutable} from 'nuclear-js';


export const stepState = ['stepStore'];

export const currentStep = [
  stepState,
  (state) => {
    return state.get('step');
  }
];
