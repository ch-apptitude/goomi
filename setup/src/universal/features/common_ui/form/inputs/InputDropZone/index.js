/**
*
* InputDropZone
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

import Icon from 'features/common_ui/components/Icon';

const StyledDropzone = styled(Dropzone)`
  height: 180px;
  width: 180px;
  background-color: #efecea;
  border-radius: 50%;
  margin: auto;
  overflow: hidden;
  cursor: pointer;

.preview {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  transition: all 200ms;
  &:hover {
    background-color: #545352;
  }
  > * {
    margin: auto;
  }
  img {
    transition: all 200ms;
  }
  &:hover &__Icon {
    opacity: 0.7;
  }
  &:hover img {
    opacity: 0.2;
  }
}
`;

const PreviewIcon = styled(Icon)`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 70px;
  transition: all 200ms;
`;

class InputDropZone extends PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      value: this.getValue(props.value),
    };
  }

  componentWillUnmount() {
    URL.revokeObjectURL(this.state.value.preview);
  }

  componentWilReceiveProps(nextProps) {
    URL.revokeObjectURL(this.state.value.preview);
    this.setState({
      value: this.getValue(nextProps.value),
    });
  }

  getValue = (value) => {
    if (typeof value === 'string') {
      return { preview: value };
    }
    return value;
  };

  onDrop = (value) => {
    const file = value[0];
    this.setState({
      value: file,
    });
    this.props.onChange(file);
  };

  render() {
    const { accept, minSize, maxSize, disableClick, name, id, content, className } = this.props;

    return (
      <StyledDropzone
        id={id}
        className={className}
        name={name}
        onDrop={this.onDrop}
        multiple={false}
        accept={accept}
        minSize={minSize}
        maxSize={maxSize}
        disableClick={disableClick}
      >
        <div className="preview">
          {!this.state.value && content}
          {!!this.state.value && <img src={this.state.value.preview} alt="profile preview" />}
          <PreviewIcon icon="cloud-upload" />
        </div>
      </StyledDropzone>
    );
  }
}

InputDropZone.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  accept: PropTypes.string,
  className: PropTypes.string,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  disableClick: PropTypes.bool,
  onChange: PropTypes.func,
};

InputDropZone.defaultProps = {
  content: '',
  default: null,
  accept: 'image/*',
  maxSize: Number.MAX_SAFE_INTEGER,
  minSize: 0,
  disableClick: false,
  onChange: () => {},
};

export default InputDropZone;
