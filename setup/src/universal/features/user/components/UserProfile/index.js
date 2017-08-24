/**
*
* UserProfile
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const UserProfile = () => (
  <div>
    <FormattedMessage {...messages.header} />
  </div>
);

UserProfile.defaultProps = {};

UserProfile.contextTypes = {};

UserProfile.propTypes = {};

export default UserProfile;
