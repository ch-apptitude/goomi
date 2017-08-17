/**
*
* InputRadioGroup
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class InputRadioGroup extends Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  componentWillReceiveProps({ value }) {
    if (this.state.value !== value) {
      this.setState({
        value,
      });
    }
  }

  onChange = (value) => {
    this.setState({
      value,
    });
    this.props.onChange(value);
  };

  getRadios() {
    const { renderRadio, items } = this.props;

    return items.map((item) =>
      renderRadio({
        ...item,
        onClick: () => !item.disabled && this.onChange(item.value),
        selected: item.value === this.state.value,
        key: item.value,
      }),
    );
  }

  render() {
    const { id, name } = this.props;
    return (
      <div className={styles.InputRadioGroup}>
        {this.getRadios()}
        <input id={id} type="hidden" name={name} value={this.state.value} />
      </div>
    );
  }
}

InputRadioGroup.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  renderRadio: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

InputRadioGroup.defaultProps = {
  value: undefined,
  onChange: () => {},
};

export default InputRadioGroup;
