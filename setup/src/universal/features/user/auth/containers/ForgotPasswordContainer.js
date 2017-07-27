/*
 *
 * ForgotPasswordContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { forgotPassword } from 'features/user/actions';

import ForgotPasswordForm from 'features/user/auth/components/ForgotPasswordForm';
import ForgotPasswordResponse from 'features/user/auth/components/ForgotPasswordResponse';

class ForgotPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      succeed: false,
      failed: false,
      loading: false,
    };
  }

  onSubmitSucceed = () => this.setState({ failed: false, succeed: true, loading: false });

  onSubmitFailed = ({ code }) => this.setState({ failed: code, succeed: false, loading: false });

  onSubmitLoading = () => this.setState({ failed: false, succeed: false, loading: true });

  onSubmit = (values) => {
    this.onSubmitLoading();
    return new Promise((resolve, reject) => this.props.forgotPassword(values, { resolve, reject }))
      .then(this.onSubmitSucceed)
      .catch(this.onSubmitFailed);
  };
  render() {
    const { succeed, failed, loading } = this.state;
    if (succeed) {
      return <ForgotPasswordResponse succeed />;
    } else if (failed) {
      return <ForgotPasswordResponse error={failed} />;
    } else if (loading) {
      return <ForgotPasswordResponse loading />;
    }
    return <ForgotPasswordForm onSubmit={this.onSubmit} />;
  }
}

ForgotPasswordContainer.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (...etc) => dispatch(forgotPassword(...etc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
