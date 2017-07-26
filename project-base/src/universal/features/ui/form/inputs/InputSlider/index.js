/**
*
* InputSlider
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';

import styles from './styles.scss';

class InputSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value,
    });
  }

  onChange = value => {
    this.setState(
      {
        value,
      },
      () => this.props.onChange(value),
    );
  };

  render() {
    const { min, max, unite, className, onAfterChange } = this.props;
    return (
      <div className={[styles.InputSlider, className].join(' ')}>
        <Range value={this.state.value} min={min} max={max} onChange={this.onChange} onAfterChange={onAfterChange} />
        {!!unite &&
          <div className={styles.InputSlider__Values}>
            <span>
              {(!!this.state.value && this.state.value[0]) || min} {unite}
            </span>
            <span>
              {(!!this.state.value && this.state.value[1]) || min} {unite}
            </span>
          </div>}
      </div>
    );
  }
}

InputSlider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  unite: PropTypes.string,
  className: PropTypes.string,
};

InputSlider.defaultProps = {
  value: undefined,
  onChange: () => {},
  onAfterChange: () => {},
  max: 100,
  min: 0,
  unite: undefined,
  className: '',
};

export default InputSlider;
