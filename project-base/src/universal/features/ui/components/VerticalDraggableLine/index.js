/**
*
* VerticalDraggableLine
*
*/
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class DraggableLine extends Component {
  constructor(props) {
    super(props);
    if (props.vertical) {
      this.state = {
        X: 10,
      };
    } else {
      this.state = {
        Y: 10,
      };
    }
  }

  onDragLine = (event) => {
    if (this.props.vertical) {
      this.setState({
        X: event.pageX,
      });
    } else {
      this.setState({
        Y: event.clientY,
      });
    }
  };

  onDragStart = (event) => {
    const img = document.createElement('img');
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    event.dataTransfer.setDragImage(img, 0, 0);
    this.setState({
      startX: event.clientX,
      startY: event.clientY,
    });
  };

  onDragEnd = (event) => {
    console.log('==================== Measures');
    console.log('X (width)', Math.abs(this.state.startX - event.clientX));
    console.log('Y (height)', Math.abs(this.state.startY - event.clientY));
  };

  render() {
    let className = styles.DraggableLine;
    let style = {};
    if (this.props.vertical) {
      className = `${className} ${styles.DraggableLine__Vertical}`;
      style = { left: `${this.state.X}px` };
    } else {
      className = `${className} ${styles.DraggableLine__Horizontal}`;
      style = { top: `${this.state.Y}px` };
    }
    return (
      <div
        className={className}
        style={style}
        draggable="true"
        onDrag={this.onDragLine}
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div className={styles.DraggableLine__Inner} />
      </div>
    );
  }
}

DraggableLine.propTypes = {
  vertical: PropTypes.bool,
};

DraggableLine.defaultProps = {
  vertical: false,
};

export default DraggableLine;
