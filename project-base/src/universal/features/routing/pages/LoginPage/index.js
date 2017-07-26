/*
 *
 * LoginPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import LoginForm from 'features/user/auth/components/LoginForm';

import messages from './messages';
import styles from './styles.scss';

const LoginPage = (props, { intl }) => (
  <div className={styles.LoginPage}>
    <Helmet title={intl.formatMessage(messages.login)} />
    <Row className={styles.LoginPage__LoginForm}>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
        <LoginForm />
      </Col>
    </Row>
  </div>
);

LoginPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default LoginPage;
