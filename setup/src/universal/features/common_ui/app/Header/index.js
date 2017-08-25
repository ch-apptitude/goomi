/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from 'assets/theme';
import { UserPropTypes } from 'features/user/constants';
import HOCAuth from 'features/user/hoc/HOCAuth';

import ProfilePicture from 'features/user/components/ProfilePicture';
import Logo from 'features/common_ui/components/Logo';
import Button, { GreenButton } from 'features/common_ui/components/Button';

import messages from './messages';

const HeaderMenu = styled.div`
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: inline-block;
  }
`;

const HeaderContainer = styled.div`
  height: ${Theme.Metrics.header_height}px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const AnonymHeader = () => (
  <HeaderMenu>
    <GreenButton linkTo="/register" message={messages.register} />
    <Button linkTo="/login" message={messages.login} />
  </HeaderMenu>
);

const UserHeader = ({ user, logout }) => (
  <HeaderMenu>
    <Button onClick={logout} message={messages.logout} />
    <ProfilePicture firstName={user.firstName} lastName={user.lastName} size={38} />
  </HeaderMenu>
);

UserHeader.propTypes = {
  user: UserPropTypes.isRequired,
  logout: PropTypes.func.isRequired,
};

const Header = ({ user, logout }) => {
  let menu = <AnonymHeader />;
  if (user) {
    menu = <UserHeader user={user} logout={logout} />;
  }
  return (
    <HeaderContainer>
      <Button className="logo" linkTo="/">
        <Logo />
      </Button>
      {menu}
    </HeaderContainer>
  );
};

Header.propTypes = {
  user: UserPropTypes,
  logout: PropTypes.func.isRequired,
};

export default HOCAuth(Header);
