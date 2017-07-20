/**
*
* LoginRedirect
*
*/

import React, { Component } from 'react';

import RedirectBox from 'features/routing/components/RedirectBox';
import messages from './messages';

class LoginRedirect extends Component {
  body = messages.LoginRedirectBody;

  buttons = [
    {
      linkTo: '/login',
      message: messages.LoginRedirectLogin,
    },
    {
      linkTo: '/register',
      message: messages.LoginRedirectRegister,
    },
  ];

  render() {
    return <RedirectBox body={this.body} buttons={this.buttons} />;
  }
}

export default LoginRedirect;
