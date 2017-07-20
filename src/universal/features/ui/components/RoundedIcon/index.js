/**
*
* RoundedIcon
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Icon, { iconProps } from 'features/ui/components/Icon';

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

  return (
    <div className={roundedIconClass} style={{ width: `${size}px`, height: `${size}px` }}>
      <Icon className={styles.RoundedIcon__Content} {...etc} style={{ fontSize: `calc(${size}px - ${Math.abs(size / 2)}px)` }} />
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
