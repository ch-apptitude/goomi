/**
*
* UserProfile
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.scss';

const UserProfile = () => (
  <div className={styles.UserProfile}>
    <FormattedMessage {...messages.header} />
  </div>
);

UserProfile.defaultProps = {};

UserProfile.contextTypes = {};

UserProfile.propTypes = {};

export default UserProfile;
