/**
*
* ProfileCompleteRedirect
*
*/

import React, { Component } from 'react';

import RedirectBox from 'features/routing/components/RedirectBox';
import HOCRedirect from 'features/routing/hoc/HOCRedirect';
import { USER_STATUS } from 'features/user/constants';
import messages from './messages';

class ProfileCompleteRedirect extends Component {
  body = messages.ProfileCompleteRedirectBody;

  buttons = [
    {
      linkTo: '/register/user-infos',
      message: messages.ProfileCompleteRedirectButton,
    },
  ];

  render() {
    return <RedirectBox body={this.body} buttons={this.buttons} />;
  }
}

export default HOCRedirect(ProfileCompleteRedirect, USER_STATUS.VERIFIED);
