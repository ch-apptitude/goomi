/**
*
* InputDatepicker
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import moment from 'moment';

import DatePicker from 'react-datepicker';

import styles from './styles.scss';

class InputDatepicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange = (newValue) => {
    this.setState({ value: newValue });
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  };

  render() {
    const { className, placeholder, name, id, min } = this.props;
    return (
      <DatePicker
        name={name}
        id={id}
        className={[styles.InputDatepicker, className].join(' ')}
        selected={this.state.value}
        onChange={this.onChange}
        placeholderText={placeholder}
        minDate={min || moment()}
        dateFormat="DD.MM.YYYY"
      />
    );
  }
}

InputDatepicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  min: PropTypes.instanceOf(Date),
};

InputDatepicker.defaultProps = {
  placeholder: '',
  className: '',
  min: undefined,
  value: undefined,
};

export default pure(InputDatepicker);
