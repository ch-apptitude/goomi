/*
 *
 * ResetPasswordContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { resetPassword } from 'features/user/actions';

import ResetPasswordForm from 'features/user/auth/components/ResetPasswordForm';
import ResetPasswordResponse from 'features/user/auth/components/ResetPasswordResponse';

class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      succeed: false,
      failed: false,
      loading: false,
    };
  }

  onSubmitSucceed = () => {
    this.setState({ failed: false, succeed: true, loading: false });
    if (typeof window !== 'undefined') {
      setTimeout(() => this.context.router.push('/'), 5000);
    }
  };
  onSubmitFailed = () => this.setState({ failed: true, succeed: false, loading: false });

  onSubmitLoading = () => this.setState({ failed: false, succeed: false, loading: true });

  onSubmit = (values) => {
    this.onSubmitLoading();
    return new Promise((resolve, reject) =>
      this.props.resetPassword({ password: values.password }, this.props.token, { resolve, reject }),
    )
      .then(this.onSubmitSucceed)
      .catch(this.onSubmitFailed);
  };

  render() {
    const { succeed, failed, loading } = this.state;
    if (succeed) {
      return <ResetPasswordResponse succeed />;
    } else if (failed) {
      return <ResetPasswordResponse error={failed} />;
    } else if (loading) {
      return <ResetPasswordResponse loading />;
    }
    return <ResetPasswordForm onSubmit={this.onSubmit} />;
  }
}

ResetPasswordContainer.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  token: PropTypes.string,
};

ResetPasswordContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (...etc) => dispatch(resetPassword(...etc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);
