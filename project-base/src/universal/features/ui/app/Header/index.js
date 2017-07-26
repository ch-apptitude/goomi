/**
*
* Header
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { UserPropTypes } from 'features/user/constants';
import HOCAuth from 'features/user/hoc/HOCAuth';

import ProfilePicture from 'features/user/components/ProfilePicture';
import Logo from 'features/ui/components/Logo';
import Button, { GreenButton } from 'features/ui/components/Button';

import styles from './styles.scss';
import messages from './messages';

const AnonymHeader = () => (
  <div className={styles.HeaderMenu}>
    <GreenButton className={styles.HeaderMenu__Item} linkTo="/register" message={messages.register} />
    <Button className={styles.HeaderMenu__Item} linkTo="/login" message={messages.login} />
  </div>
);

const UserHeader = ({ user, logout }) => (
  <div className={styles.HeaderMenu}>
    <Button className={styles.HeaderMenu__Item} onClick={logout} message={messages.logout} />
    <ProfilePicture firstName={user.firstName} lastName={user.lastName} size={38} className={styles.HeaderMenu__ProfilePicture} />
  </div>
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
    <div className={styles.Header}>
      <Button className={styles.Header__Logo} linkTo="/" message={<Logo />} />
      {menu}
    </div>
  );
};

Header.propTypes = {
  user: UserPropTypes,
  logout: PropTypes.func.isRequired,
};

export default HOCAuth(Header);
