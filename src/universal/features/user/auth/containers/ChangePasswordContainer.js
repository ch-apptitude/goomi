/*
 *
 * ChangePasswordContainer
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changePassword } from 'features/user/actions';

import ChangePasswordForm from 'features/user/auth/components/ChangePasswordForm';

class ChangePasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = (values) =>
    new Promise((resolve, reject) =>
      this.props.changePassword({ oldPassword: values.oldPassword, password: values.password }, { resolve, reject }),
    );

  render() {
    return <ChangePasswordForm onSubmit={this.onSubmit} />;
  }
}

ChangePasswordContainer.propTypes = {
  changePassword: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  changePassword: (...etc) => dispatch(changePassword(...etc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);
