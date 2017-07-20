/*
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';

import Button from 'features/ui/components/Button';
import HOCAuth from 'features/user/hoc/HOCAuth';
import { UserPropTypes } from 'features/user/constants';

import messages from './messages';
import styles from './styles.scss';

const MyProfileNavigtion = () => (
  <Row className={styles.ProfilePage__Header}>
    <Col xs={12} sm={10} smOffset={1}>
      <Col xs={12} sm={2} smOffset={1} className={styles.ProfilePage__Header__Items}>
        <Button
          linkTo={'/profile'}
          className={styles.ProfilePage__Header__Item}
          message={messages.parameters}
          activeClassName={styles.ProfilePage__Header__Item_Active}
        />
      </Col>
    </Col>
  </Row>
);

MyProfileNavigtion.propTypes = {
  user: UserPropTypes.isRequired,
};

const ProfilePage = ({ params, location, children, user }, { intl }) => (
  <Row className={styles.ProfilePage}>
    <Helmet title={intl.formatMessage(messages.profile)} />
    <Col xs={12} sm={10} smOffset={1} className={styles.ProfilePage__Items}>
      {!!user && <MyProfileNavigtion user={user} />}
      {children}
    </Col>
  </Row>
);

ProfilePage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

ProfilePage.propTypes = {
  user: UserPropTypes,
  children: PropTypes.element.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
  location: PropTypes.object,
};

ProfilePage.defaultProps = {
  user: undefined,
  params: { id: undefined },
};

export default HOCAuth(ProfilePage, true);
