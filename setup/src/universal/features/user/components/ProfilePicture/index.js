/**
*
* ProfilePicture
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InitialsBadge from 'features/common_ui/components/InitialsBadge';

const SizedProfilePicture = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const RoundedProfilePicture = styled.img`
  border-radius: 50%;
`;

const ProfilePicture = ({ firstName, lastName, pictureUrl, size, className }) => {
  let picture;
  if (pictureUrl) {
    picture = <RoundedProfilePicture src={pictureUrl} alt="profile" />;
  } else {
    picture = <InitialsBadge first={firstName} last={lastName} size={size} />;
  }

  return (
    <SizedProfilePicture className={className}>
      {picture}
    </SizedProfilePicture>
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
  firstName: 'U',
  lastName: 'N',
  pictureUrl: undefined,
};

export default ProfilePicture;
