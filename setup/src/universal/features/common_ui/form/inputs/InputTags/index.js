/**
*
* InputTags
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';
import styled from 'styled-components';
import 'react-tagsinput/react-tagsinput.css';

import { InputStyle, PlaceholderStyle } from '../input-style';

const StyledTags = styled(TagsInput)`
  ${InputStyle}
  padding: 9.5px 20px;

  ::placeholder {
    color: #545352;
  }

  &--focused {
    border-color: none;
  }

  &-input {
    margin-bottom: 0;
    ${PlaceholderStyle}
  }

  &-tag {
    background-color: #545352;
    color: white;
    border: none;
    border-radius: 2px;
  }

  &-remove {
    background: #706f6d;
    height: 18px;
    width: 13px;
    border-radius: 50%;
    vertical-align: middle;
    line-height: 13px;
    padding-left: 5px;
    margin-left: 5px;
  }
`;

class InputTags extends Component {
  constructor(props) {
    super(props);
    this.state = { tags: props.value || [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleChange = (tags) => {
    this.setState({ tags });

    if (this.props.onChange) {
      this.props.onChange(tags);
    }
  };

  render() {
    return <StyledTags value={this.state.tags} onChange={this.handleChange} />;
  }
}

InputTags.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

InputTags.defaultProps = {
  value: [],
};

export default InputTags;
