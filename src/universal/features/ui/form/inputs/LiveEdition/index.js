/**
*
* LiveEdition
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class LiveEdition extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.displayInput && this.props.displayInput) {
      this.props.changeInputValue(this.props.defaultValue);
      this.textInput.focus();
    }
  }

  render() {
    const {
      children,
      name,
      defaultValue,

      displayInput,
      changeDisplayInput,
      toggleInput,

      postInput,

      inputValue,
      changeInputValue,
    } = this.props;
    let contant = null;
    if (displayInput) {
      contant = (
        <input
          className={styles.LiveEdition__Input}
          name={name}
          type={name === 'teamNumber' ? 'number' : 'text'}
          value={inputValue}
          ref={(input) => {
            this.textInput = input;
          }}
          onChange={(evt) => changeInputValue(evt.target.value)}
          onKeyPress={postInput}
          placeholder={defaultValue}
          onBlur={() => changeDisplayInput(false)}
        />
      );
    } else {
      contant = children;
    }

    return (
      <div className={styles.LiveEdition} onClick={toggleInput}>
        {contant}
      </div>
    );
  }
}

LiveEdition.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  displayInput: PropTypes.bool,
  toggleInput: PropTypes.func,
  changeDisplayInput: PropTypes.func,

  postInput: PropTypes.func,

  inputValue: PropTypes.string,
  changeInputValue: PropTypes.func,
};

LiveEdition.defaultProps = {
  children: undefined,
  name: '',
  defaultValue: undefined,

  displayInput: false,
  toggleInput: () => {},
  changeDisplayInput: () => {},

  postInput: () => {},

  inputValue: undefined,
  changeInputValue: () => {},
};

export default LiveEdition;
