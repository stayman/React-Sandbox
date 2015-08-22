import polyfill from 'babel/polyfill';
import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import cx from 'classnames';

class StepView extends Component {
  constructor() {
    super();
    this.state = {step: 1};
  }

  static childContextTypes = {
    currentStep: PropTypes.number,
    goToStep: PropTypes.func
  }

  getChildContext() {
    return {
      currentStep: this.state.step,
      goToStep: this.goToStep.bind(this)
    };
  }

  goToStep(step) {
    return this.setState({step})
  }

  render() {
    const length = [1,2,3];
    let buttons = length.map((val, i) => {
      return <Button toStep={val} key={_.uniqueId('button_')}/>;
    });
    let steps = length.map((val, i) => {
      return <Step step={val} key={_.uniqueId('step_')}/>;
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
  static contextTypes = {
    currentStep: PropTypes.number
  }

  render() {
    let classes = cx({
      hidden: this.props.step !== this.context.currentStep
    });
    return (
      <div className={classes}> THIS IS STEP: {this.props.step} </div>
    )
  }
}

class Button extends Component {
  static contextTypes = {
    goToStep: PropTypes.func
  }

  render() {
    return (
      <button onClick={this.context.goToStep.bind(null, this.props.toStep)}>{this.props.toStep}</button>
    )
  }
}

React.render(
  <StepView step={1} />,
  document.getElementsByClassName('container-1')[0]
);
