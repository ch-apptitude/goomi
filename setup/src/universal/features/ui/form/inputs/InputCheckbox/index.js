/**
*
* InputCheckbox
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from 'features/common_ui/components/Text';

import styles from './styles.scss';

class InputCheckbox extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { checked: props.value };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.value });
  }

  toggleCheckbox = () => {
    this.setState((prevState) => ({ checked: !prevState.checked }), () => this.props.onChange(this.state.checked));
  };

  render() {
    const { name, label, id } = this.props;
    const { checked } = this.state;

    let className = styles.InputCheckbox;
    if (checked) {
      className = `${className} ${styles.InputCheckbox_Active}`;
    }

    return (
      <div className={className} onClick={this.toggleCheckbox}>
        <div className={styles.InputCheckbox__Icon}>{checked && <span>L</span>}</div>
        <Text className={styles.InputCheckbox__Text} domElement="p" size="textBig">
          {typeof label === 'string' ? <span>{label}</span> : label}
        </Text>
        <input
          className={styles.InputCheckbox_Hidden}
          name={name}
          id={id}
          type="radio"
          value={checked}
          checked={checked}
          onChange={this.toggleCheckbox}
        />
      </div>
    );
  }
}

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

InputCheckbox.defaultProps = {
  value: false,
  onChange: () => {},
};

export default InputCheckbox;
