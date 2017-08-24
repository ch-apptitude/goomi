/**
*
* InputCheckboxGroup
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputCheckbox from 'features/common_ui/form/inputs/InputCheckbox';
import iconList from 'features/common_ui/components/Icon//icon-list';
import InputIconCheckbox from 'features/common_ui/form/inputs/InputIconCheckbox';

class InputCheckboxGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  onChange = () => this.props.onChange(this.state.value);

  onCheckboxChange = (name, value) => {
    const index = this.state.value.indexOf(name);
    if (value && index === -1) {
      this.setState((prevState) => {
        prevState.value.push(name);
      }, this.onChange);
    } else {
      this.setState((prevState) => {
        prevState.value.splice(index, 1);
      }, this.onChange);
    }
  };

  itemRenderer = ({ icon, name, label }) => {
    const itemProps = {
      name,
      key: name,
      id: name,
      onChange: (value) => this.onCheckboxChange(name, value),
      value: this.state.value.indexOf(name) !== -1,
    };
    if (icon) {
      return <InputIconCheckbox icon={icon} {...itemProps} />;
    }
    return <InputCheckbox label={label} {...itemProps} />;
  };

  render() {
    const { options, name, value, id } = this.props;
    return (
      <div>
        {options.map(this.itemRenderer)}
        <input type="hidden" value={value} id={id} name={name} />
      </div>
    );
  }
}
InputCheckboxGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(Object.values(iconList)),
      name: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

InputCheckboxGroup.defaultProps = {
  onChange: console.log, // eslint-disable-line no-console
  value: [],
};

export default InputCheckboxGroup;
