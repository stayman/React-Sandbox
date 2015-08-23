import React, {Component, PropTypes, createClass} from 'react';
import {assign} from 'lodash';
import hoistNonReactStatics from 'hoist-non-react-statics';

function createComponent(Component, dataBindings) {
  const displayName = `ProvideContextComponent(${Component.displayName || Component.name})`;

  let ProvideContextComponent = createClass({
    displayName,

    contextTypes: dataBindings,

    render() {
      return React.createElement(Component, assign({}, this.props, this.state, this.context));
    }
  });

  hoistNonReactStatics(ProvideContextComponent, Component);

  return ProvideContextComponent;
}

/*
 * Decorator using `React.Component`
*/
export default function provideContextDec(Component, dataBindings) {
  if (arguments.length === 0 || typeof arguments[0] !== 'function') {
    dataBindings = arguments[0];
    return function connectToData(ComponentToDecorate) {
      return createComponent(ComponentToDecorate, dataBindings);
    };
  }

  return createComponent.apply(null, arguments);
}
