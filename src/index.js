/**
 * @class ExampleComponent
 */

import React from 'react'
import PropTypes from 'prop-types'
import { formValues } from 'redux-form';

const Condition = ({ when, is, value, children }) => (
  <React.Fragment>
    { value === is ? children : null }
  </React.Fragment>
);

Condition.propTypes = {
  when: PropTypes.string.isRequired,
  value: PropTypes.any,
  is: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default formValues(props => ({ value: props.when }))(Condition);
