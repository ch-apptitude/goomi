/**
*
* InputSelect
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import VirtualizedSelect from 'react-virtualized-select';

import Icon from 'features/ui/components/Icon';

import styles from './styles.scss';

class InputSelect extends PureComponent {
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

  onChange = (item) => {
    let value;
    if (item) {
      value = item.value;
    }
    this.setState(() => {
      this.props.onChange(value);
      return {
        value,
      };
    });
  };

  onMenuOpen = () => setTimeout(() => this.toogleOverlay(true));
  onMenuClose = () => this.toogleOverlay(false);

  toogleOverlay = (open) => document.body.classList.toggle('Overlay_Opened', open);

  arrowRenderer = () => <Icon icon="circle-down" />;

  render() {
    const { options, name, virtualized, searchable, clearable, placeholder } = this.props;
    const { value } = this.state;

    const selectProps = {
      className: styles.InputSelect,
      name,
      value,
      options,
      onChange: this.onChange,
      searchable,
      clearable,
      arrowRenderer: this.arrowRenderer,
      placeholder,
      onOpen: this.onMenuOpen,
      onClose: this.onMenuClose,
    };
    if (virtualized) {
      return <VirtualizedSelect {...selectProps} openOnFocus />;
    }
    return <Select {...selectProps} openOnFocus />;
  }
}

InputSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  virtualized: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
};

InputSelect.defaultProps = {
  value: undefined,
  virtualized: false,
  searchable: false,
  clearable: false,
  onChange: () => {},
  placeholder: '',
};

export default InputSelect;
