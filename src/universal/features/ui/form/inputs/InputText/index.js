/**
*
* InputText
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputElement from 'react-input-mask';

class InputText extends PureComponent {
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
    const { name, mask, maskChar, className, placeholder, id, ...etc } = this.props;
    return (
      <InputElement
        {...etc}
        placeholder={placeholder}
        className={className}
        onChange={(evt) => this.onChange(evt.target.value)}
        name={name}
        id={id}
        value={this.state.value}
        mask={mask}
        maskChar={maskChar}
      />
    );
  }
}

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
  className: PropTypes.string,
};

InputText.defaultProps = {
  placeholder: '',
  className: '',
  mask: null,
  maskChar: null,
  value: '',
};

export default InputText;
