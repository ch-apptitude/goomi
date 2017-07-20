/**
*
* InputTimepicker
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TimeInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { time: props.value || '' };
    this.lastVal = '';
  }

  componentDidMount() {
    if (!this.props.disabled && this.props.mountFocus) {
      setTimeout(() => {
        this._input.focus();
      }, 0);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.onChangeHandler(nextProps.value);
    }
  }

  componentDidUpdate() {
    if (this.props.mountFocus) {
      setTimeout(() => {
        this._input.focus();
      }, 0);
    }
  }

  onChangeHandler(valSend) {
    let val = valSend;
    if (val === this.state.time) {
      return;
    }
    if (this.isValid(val)) {
      if (val.length === 2 && this.lastVal.length !== 3) {
        val = `${val}:`;
      }

      if (val.length === 2 && this.lastVal.length === 3) {
        val = val.slice(0, 1);
      }

      if (val.length > 5) {
        return false; //eslint-disable-line
      }

      this.lastVal = val;

      this.setState({ time: val });

      if (val.length === 5) {
        this.props.onChange(val);
      }
    }
  }

  getType() {
    if (this.props.type) {
      return this.props.type;
    }
    return 'time';
  }

  isValid(val) {
    const letterArr = val.split(':').join('').split('');
    const regexp = /^\d{0,2}?\:?\d{0,2}$/; // eslint-disable-line
    let valArr = [];

    if (!regexp.test(val)) {
      return false;
    }

    // check each letter

    if (letterArr[0] && (parseInt(letterArr[0], 10) < 0 || parseInt(letterArr[0], 10) > 2)) {
      return false;
    }

    if (letterArr[2] && (parseInt(letterArr[2], 10) < 0 || parseInt(letterArr[2], 10) > 5)) {
      return false;
    }

    if (valArr.indexOf(':')) {
      valArr = val.split(':');
    } else {
      valArr.push(val);
    }

    // check mm and HH
    if (valArr[0] && valArr[0].length && (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 23)) {
      return false;
    }

    if (valArr[1] && valArr[1].length && (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59)) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <input
        id={this.props.id}
        name={this.props.name}
        className={this.props.className}
        type={this.getType()}
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        value={this.state.time}
        onChange={(e) => this.onChangeHandler(e.target.value)}
        onFocus={this.props.onFocusHandler ? (e) => this.props.onFocusHandler(e) : undefined}
        onBlur={this.props.onBlur}
      />
    );
  }
}

TimeInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onFocusHandler: PropTypes.func,
  mountFocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default TimeInput;
