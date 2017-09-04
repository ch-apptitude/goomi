/**
*
* VerifiedRedirect
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HOCAuth from 'features/user/hoc/HOCAuth';
import HOCRedirect from 'features/routing/hoc/HOCRedirect';

import { UserPropTypes, USER_STATUS } from 'features/user/constants';
import { sendNewConfirmEmail } from 'features/user/actions';

import RedirectBox from 'features/routing/components/RedirectBox';

import messages from './messages';

class VerifiedRedirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: messages.VerifiedRedirectBody,
      buttons: [
        {
          linkTo: '/',
          message: messages.VerifiedRedirectButton,
        },
        {
          onClick: this.sendValidationEmail,
          message: messages.resendConfirmEmail,
        },
      ],
    };
  }

  sendValidationEmail = () => {
    const { sendValidationEmail } = this.props;
    new Promise((resolve, reject) => sendValidationEmail({ resolve, reject })).then(() => {
      this.setState(state => ({ buttons: state.buttons.slice(0, 1), body: messages.VerifiedRedirectBodyRedirect }));
      setTimeout(() => this.context.router.push('/'), 5000);
    });
  };

  render() {
    const { user } = this.props;
    const { body, buttons } = this.state;
    const bodyValues = { email: user.email };
    return <RedirectBox body={body} bodyValues={bodyValues} buttons={buttons} />;
  }
}

VerifiedRedirect.propTypes = {
  user: UserPropTypes,
  sendValidationEmail: PropTypes.func.isRequired,
};

VerifiedRedirect.defaultProps = {
  user: undefined,
};

VerifiedRedirect.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  sendValidationEmail: (...etc) => dispatch(sendNewConfirmEmail(...etc)),
});

export default HOCAuth(HOCRedirect(connect(null, mapDispatchToProps)(VerifiedRedirect), USER_STATUS.LOGGED_IN));
