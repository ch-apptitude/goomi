import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import { selectUserStatus } from 'features/user/selectors';
import { USER_STATUS } from 'features/user/constants';
import NotFound from 'features/routing/components/NotFound';
import LoginRedirect from 'features/routing/containers/LoginRedirectContainer';
import ProfileCompleteRedirect from 'features/routing/containers/ProfileCompleteRedirectContainer';
import VerifiedRedirect from 'features/routing/containers/VerifiedRedirectContainer';

export default function HOCAuth(WrappedComponent, requiredStatus, excludedStatus) {
  const mapStateToProps = createStructuredSelector({
    userStatus: selectUserStatus(),
  });

  const Enhanced = ({ userStatus, ...etc }) => {
    const getRedirectComponent = () => {
      switch (requiredStatus) {
        case USER_STATUS.LOGGED_IN:
          return <LoginRedirect />;
        case USER_STATUS.PROFILE_COMPLETE:
          return <ProfileCompleteRedirect />;
        case USER_STATUS.VERIFIED:
          return <VerifiedRedirect />;
        default:
          return <LoginRedirect />;
      }
    };

    if (userStatus.indexOf(USER_STATUS.LOADING) !== -1) {
      return <div>Loading user...</div>;
    }
    if (excludedStatus) {
      const exclStatus = [].concat([], excludedStatus);
      if (_.intersection(userStatus, exclStatus).length > 0) {
        return <NotFound />;
      }
    }
    if (requiredStatus) {
      if (userStatus.indexOf(requiredStatus) !== -1) {
        return <WrappedComponent {...etc} />;
      }
      return getRedirectComponent();
    }
    return <WrappedComponent {...etc} />;
  };

  Enhanced.propTypes = {
    userStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return connect(mapStateToProps)(Enhanced);
}
