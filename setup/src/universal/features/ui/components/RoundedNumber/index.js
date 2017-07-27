/**
*
* RoundedNumber
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import styles from './styles.scss';

const RoundedNumber = ({ value, size, color }) => {
  const style = { width: `${size}px`, height: `${size}px`, lineHeight: `${size}px` };
  return (
    <div className={[styles.RoundedNumber, styles[color]].join(' ')} style={style}>
      <FormattedNumber value={value} />
    </div>
  );
};
RoundedNumber.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number,
  color: PropTypes.oneOf(['orange', 'grey']),
};

RoundedNumber.defaultProps = {
  size: 22,
  color: 'grey',
};

export default RoundedNumber;
