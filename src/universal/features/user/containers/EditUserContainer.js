/*
 *
 * Hocprofile
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { UserPropTypes } from 'features/user/constants';
import UserDetailsForm from 'features/user/components/UserDetailsForm';
import HOCAuth from 'features/user/hoc/HOCAuth';
import { updateUser, sendNewConfirmEmail } from 'features/user/actions';

import config from 'appConfig';

class EditUserContainer extends Component {
  formatFormValues(user) {
    if (user) {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        companyName: user.companyName,
        simpleAddress: user.location.simpleAddress,
        email: user.email,
        birthdate: user.birthdate,
        preferredLanguage: user.preferredLanguage,
        civility: user.civility,
        maritalStatus: user.maritalStatus,
        pictureUrl: { picture: user.pictureUrl ? `${config.url}/uploads/${user.pictureUrl}` : undefined },
      };
    }
    return {};
  }

  sendNewConfirmEmail = () => new Promise((resolve, reject) => this.props.sendNewConfirmEmail({ resolve, reject }));

  updateUser = (values) => new Promise((resolve, reject) => this.props.submit(values, { resolve, reject })).then();

  render() {
    const defaultValues = this.formatFormValues(this.props.user);
    return (
      <UserDetailsForm
        defaultValues={defaultValues}
        onSubmit={this.updateUser}
        sendNewConfirmEmail={{ show: !this.props.user.isVerified, func: this.sendNewConfirmEmail }}
      />
    );
  }
}

EditUserContainer.propTypes = {
  user: UserPropTypes,
  submit: PropTypes.func.isRequired,
  sendNewConfirmEmail: PropTypes.func.isRequired,
};

EditUserContainer.defaultProps = {
  user: undefined,
};
const mapDispatchToProps = (dispatch) => ({
  sendNewConfirmEmail: (...etc) => dispatch(sendNewConfirmEmail(...etc)),
  submit: (values) => dispatch(updateUser(values)),
});

export default HOCAuth(connect(null, mapDispatchToProps)(EditUserContainer), true);
