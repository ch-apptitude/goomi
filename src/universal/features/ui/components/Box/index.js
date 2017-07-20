/**
*
* Box
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

import styles from './styles.scss';

const Box = ({ children, borderTop, smallHeight, small, medium, ...etc }) => {
  let boxClassNames = [styles.Box];
  if (borderTop) {
    boxClassNames.push(styles.Box__BorderTop);
  }

  if (smallHeight) {
    boxClassNames.push(styles.Box__SmallHeight);
  } else if (medium) {
    boxClassNames.push(styles.Box__Medium);
  } else if (small) {
    boxClassNames.push(styles.Box__Small);
  }

  if (etc.className) {
    boxClassNames = boxClassNames.concat(etc.className);
  }
  return (
    <Grid fluid className={boxClassNames.join(' ')}>
      {children}
    </Grid>
  );
};

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.string, PropTypes.number]),
  borderTop: PropTypes.bool,
  smallHeight: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

Box.defaultProps = {
  children: undefined,
  borderTop: false,
  smallHeight: false,
  small: false,
};

export default Box;
