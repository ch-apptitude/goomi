import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { UserPropTypes } from 'features/user/constants';
import { selectUser, selectIsLog } from 'features/user/selectors';
import { login, register, logout, updateUser, forgotPassword, resetPassword } from 'features/user/actions';

export default function HOCAuth(WrappedComponent, mandatory) {
  const mapStateToProps = createStructuredSelector({
    user: selectUser(),
    isLogged: selectIsLog(),
  });

  const mapDispatchToProps = (dispatch) => ({
    login: (body, deferred) => dispatch(login(body, deferred)),
    logout: () => dispatch(logout()),
    register: (body, deferred) => dispatch(register(body, deferred)),
    updateUser: (body) => dispatch(updateUser(body)),
    forgotPassword: (body) => dispatch(forgotPassword(body)),
    resetPassword: (body) => dispatch(resetPassword(body)),
  });

  const Enhanced = ({ user, ...etc }) => {
    if (user || !mandatory) {
      return <WrappedComponent user={user} {...etc} />;
    }
    return <div>Loading user...</div>;
  };

  Enhanced.propTypes = {
    user: UserPropTypes,
  };
  Enhanced.defaultProps = {
    user: undefined,
  };
  return connect(mapStateToProps, mapDispatchToProps)(Enhanced);
}
