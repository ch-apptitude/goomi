/**
*
* Icon
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import iconList from './icon-list';
import styles from './styles.scss';

const Icon = ({ children, classes, icon, className, ...etc }) => {
  let iconClassName = `${styles.icon} ${styles[icon]}`;
  if (classes) {
    iconClassName = `${iconClassName} ${classes.map(clazz => styles[clazz]).join(' ')}`;
  }
  if (className) {
    iconClassName = `${iconClassName} ${className}`;
  }
  const result = (
    <span className={iconClassName} {...etc}>
      {children}
    </span>
  );

  return result;
};

export const iconProps = {
  children: PropTypes.node,
  classes: PropTypes.array,
  icon: PropTypes.oneOf(iconList).isRequired,
  className: PropTypes.string,
};

Icon.propTypes = iconProps;

export default Icon;
