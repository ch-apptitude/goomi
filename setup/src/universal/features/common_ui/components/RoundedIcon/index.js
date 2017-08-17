/**
*
* RoundedIcon
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Icon, { iconProps } from 'features/common_ui/components/Icon';

import styles from './styles.scss';

const RoundedIcon = ({ size, color, className, black, ...etc }) => {
  let roundedIconClass = styles.RoundedIcon;

  if (black) {
    roundedIconClass += ` ${styles.black}`;
  }
  if (className) {
    roundedIconClass += ` ${className}`;
  }
  if (color) {
    roundedIconClass += ` ${styles[color]}`;
  }
  const containerStyle = { width: `${size}px`, height: `${size}px` };
  const style = { fontSize: `calc(${size}px - ${Math.abs(size / 2)}px)` };

  return (
    <div className={roundedIconClass} style={containerStyle}>
      <Icon className={styles.RoundedIcon__Content} {...etc} style={style} />
    </div>
  );
};

RoundedIcon.propTypes = {
  ...iconProps,
  size: PropTypes.number,
  black: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'grey', 'green', 'orange']),
};

RoundedIcon.defaultProps = {
  size: 130,
  color: 'grey',
  black: false,
};

export default RoundedIcon;
