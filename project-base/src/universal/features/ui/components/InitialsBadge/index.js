/**
*
* InitialsBadge
*
*/
import React from 'react';
import PropTypes from 'prop-types';

import Text from 'features/ui/components/Text';

import styles from './styles.scss';

const InitialsBadge = ({ first, last, size }) => {
  let imageText = first.length > 1 ? first.slice(0, 1) : first;
  imageText += last.length > 1 ? last.slice(0, 1) : last;
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
  };
  return (
    <Text
      className={`${styles.InitialsBadge} ${styles.Avatar_Text} InitialsBadge__Image`}
      domElement="p"
      color="green"
      size="title"
      textStyle="uppercase"
      style={style}
    >
      {imageText}
    </Text>
  );
};

InitialsBadge.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default InitialsBadge;
