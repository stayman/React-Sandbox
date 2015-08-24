import polyfill from 'babel/polyfill';
import React, {Component, PropTypes} from 'react';
import reactor from './module/reactor';
import _ from 'lodash';
import cx from 'classnames';
import {provideReactor, nuclearComponent} from 'nuclear-js-react-addons';
import stepView from './module/step-view';
import contextDec from './module/nuclearDec';

reactor.registerStores({
  stepStore: stepView.Stores.stepStore
});

@provideReactor({
  Actions: PropTypes.object.isRequired
})
class StepView extends Component {
  constructor() {
    super();
    this.state = {step: 1};
  }

  render() {
    const length = [1,2,3];
    let buttons = length.map((val, i) => {
      return <Button toStep={val} key={_.uniqueId('button_')}/>;
    });

    let steps = length.map((val, i) => {
      return <hoStep step={val} key={_.uniqueId('step_')}/>;
    });

    return (
      <div>
        {buttons}
        {steps}
      </div>
    )
  }
}

class Step extends Component {

  render() {
    console.log(this.props);
    let classes = cx({
      hidden: this.props.currentStep !== this.props.step
    });
    return (
      <div className={classes}> THIS IS STEP: {this.props.step} </div>
    )
  }
}

@nuclearComponent({
  currentStep: stepView.Getters.currentStep
})
@contextDec({
  Actions: PropTypes.object.isRequired
})
class Button extends Component {
  constructor(props) {
    super(props);
  }

  goToStep(step) {
    this.props.Actions.stepTo({step});
  }


  render() {
    return (
      <button onClick={this.goToStep.bind(this, this.props.toStep)}>{this.props.toStep}</button>
    )
  }
}

let higherOrderComp = function(ReactComponent){

  @nuclearComponent({
    currentStep: stepView.Getters.currentStep
  })
  class HigherOrderComponent extends Component {
    render() {
      return (
        <ReactComponent {...this.props} />
      )
    }
  }

  return HigherOrderComponent;
}

let hoStep = higherOrderComp(Step);

React.render(
  <StepView
    reactor={reactor}
    Actions={stepView.Actions}
  />,
  document.getElementsByClassName('container-1')[0]
);
