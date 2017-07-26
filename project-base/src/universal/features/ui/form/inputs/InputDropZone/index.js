/**
*
* InputDropZone
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import Icon from 'features/ui/components/Icon';

import styles from './styles.scss';

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
    const { accept, minSize, maxSize, disableClick, name, id, content } = this.props;

    return (
      <Dropzone
        id={id}
        className={styles.InputDropZone}
        name={name}
        onDrop={this.onDrop}
        multiple={false}
        accept={accept}
        minSize={minSize}
        maxSize={maxSize}
        disableClick={disableClick}
      >
        <div className={styles.InputDropZone__Preview}>
          {!this.state.value && content}
          {!!this.state.value && <img src={this.state.value.preview} alt="profile preview" />}
          <Icon icon="cloud-upload" className={styles.InputDropZone__Preview__Icon} />
        </div>
      </Dropzone>
    );
  }
}

InputDropZone.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  accept: PropTypes.string,
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
