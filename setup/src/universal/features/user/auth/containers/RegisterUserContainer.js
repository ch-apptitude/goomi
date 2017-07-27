/*
 *
 * Hocprofile
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RegisterForm from 'features/user/auth/components/RegisterForm';
import HOCAuth from 'features/user/hoc/HOCAuth';
import errorMessages from 'features/ui/form/error-messages';

class RegisterUserContainer extends Component {
  handleSubmitionErrors(form, { code, errors }) {
    const { intl } = this.context;
    if (errors) {
      form.setAllTouched(true, { errors });
    } else {
      form.setAllTouched(true, {
        errors: {
          general: errorMessages[code] ? intl.formatMessage(errorMessages[code]) : `Unsupported Error : ${code}`,
        },
      });
    }
  }

  submit = (data, state, props, form) => {
    const { router } = this.context;
    const body = {
      password: data.pwd,
      ...data,
    };
    new Promise((resolve, reject) => {
      this.props.register(body, { resolve, reject });
    })
      .then(router.push.bind(this, '/register/success'))
      .catch(this.handleSubmitionErrors.bind(this, form));
  };

  render() {
    return <RegisterForm onSubmit={this.submit} />;
  }
}

RegisterUserContainer.propTypes = {
  register: PropTypes.func.isRequired,
};
RegisterUserContainer.defaultProps = {
  register: console.log, // eslint-disable-line no-console
};
RegisterUserContainer.contextTypes = {
  router: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default HOCAuth(RegisterUserContainer);
