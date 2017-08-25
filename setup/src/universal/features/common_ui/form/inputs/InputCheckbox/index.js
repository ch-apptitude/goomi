/**
*
* InputCheckbox
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Text from 'features/common_ui/components/Text';

const CheckBox = styled.div`
  overflow: auto;
  padding: 8px 15px 8px 0px;
  cursor: pointer;
  display: inline-flex !important;

  .text * {
    color: #545352 !important;
  }

  .icon {
    vertical-align: top;
    display: inline-block;
    height: 18px;
    width: 18px;
    font-size: 15px;
    margin-top: 12px;
    border: solid 1px #dad8d7;
    border-radius: 5px;
    position: relative;
  }

  .text {
    vertical-align: middle;
    display: inline-block;
    margin: 3px 0 3px 8px;
    height: 20px;
  }

  .hidden {
    display: none;
  }

  .active {
    .text * {
      color: #545352 !important;
    }

    .icon {
      color: #4fcc82;
      background-color: #4fcc82;
      border: solid 1px #4fcc82;
      overflow: hidden;

      > span {
        position: absolute;
        left: 52%;
        top: 42%;
        transform: translate(-50%, -50%) rotate(30deg) rotateY(180deg);
        display: block;
        color: white;
        text-align: center;
        line-height: 15px;
      }
    }
  }
`;

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
    const { name, label, id, className, intl } = this.props;
    const { checked } = this.state;

    return (
      <CheckBox className={checked ? `active ${className}` : className} onClick={this.toggleCheckbox}>
        <div className="icon">{checked && <span>L</span>}</div>
        <Text className="text" tag="p" size={Theme.Metrics.title}>
          {label.id ? intl.formatMessage(label) : label}
        </Text>
        <input
          className="hidden"
          name={name}
          id={id}
          type="radio"
          value={checked}
          checked={checked}
          onChange={this.toggleCheckbox}
        />
      </CheckBox>
    );
  }
}

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    }),
  ]),
  value: PropTypes.bool,
  onChange: PropTypes.func,
  intl: intlShape.isRequired,
};

InputCheckbox.defaultProps = {
  value: false,
  onChange: () => {},
};

export default injectIntl(InputCheckbox);
