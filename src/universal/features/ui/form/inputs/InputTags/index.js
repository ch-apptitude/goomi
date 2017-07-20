/**
*
* InputTags
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';

import './styles.scss';

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

  handleChange = tags => {
    this.setState({ tags });

    if (this.props.onChange) {
      this.props.onChange(tags);
    }
  };

  render() {
    return <TagsInput value={this.state.tags} onChange={this.handleChange} />;
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
