/**
*
* InputTextArea
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends PureComponent {
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
    const { name, cols, rows, className, placeholder, id, registerRef, ...etc } = this.props;
    return (
      <textarea
        {...etc}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className={className}
        onChange={(evt) => this.onChange(evt.target.value)}
        name={name}
        id={id}
        value={this.state.value}
        ref={registerRef}
      />
    );
  }
}

InputTextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  registerRef: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
};

InputTextArea.defaultProps = {
  placeholder: '',
  className: '',
  cols: null,
  rows: null,
  value: '',
};

export default InputTextArea;
