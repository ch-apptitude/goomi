/**
*
* InputNumber
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RCInputNumber from 'rc-input-number';
import styles from './styles.scss';

class InputNumber extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps({ value }) {
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  onChange(newValue) {
    this.setState({ value: newValue });
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  }

  render() {
    const { name, min, max, step, className, id, unite, ...etc } = this.props;
    // more feature : https://github.com/react-component/input-number/blob/master/README.md
    return (
      <div className={styles.InputNumber}>
        <RCInputNumber
          {...etc}
          type="number"
          name={name}
          id={id}
          className={className}
          max={max}
          min={min}
          step={step}
          value={this.state.value}
          onChange={newValue => this.onChange(newValue)}
        />
        {!!unite && <span className={styles.InputNumber__Unite}>{unite}</span>}
      </div>
    );
  }
}

InputNumber.contextTypes = {};

InputNumber.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
  unite: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

InputNumber.defaultProps = {
  className: '',
  onChange: () => {},
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER,
  step: 1,
  value: undefined,
  unite: undefined,
};

export default InputNumber;
