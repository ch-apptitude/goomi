/**
*
* ProfilePicture
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import InitialsBadge from 'features/ui/components/InitialsBadge';

import styles from './styles.scss';

const ProfilePicture = ({ firstName, lastName, pictureUrl, size, className }) => {
  let picture;
  if (pictureUrl) {
    picture = <img src={pictureUrl} alt="profile" className={styles.ProfilePicture} />;
  } else {
    picture = <InitialsBadge first={firstName} last={lastName} size={size} />;
  }

  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div style={style} className={className}>
      {picture}
    </div>
  );
};

ProfilePicture.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  pictureUrl: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
};

ProfilePicture.defaultProps = {
  size: 100,
  className: '',
  firstName: 'U',
  lastName: 'N',
  pictureUrl: undefined,
};

export default ProfilePicture;
