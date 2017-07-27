/*
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';

import ForgotPasswordContainer from 'features/user/auth/containers/ForgotPasswordContainer';

import messages from './messages';
import styles from './styles.scss';

const ForgotPasswordPage = (_, { intl }) => (
  <div className={styles.ForgotPasswordPage}>
    <Helmet title={intl.formatMessage(messages.forgotPasswordPage)} />
    <Row className={styles.ProfilePage__ProfileForm}>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
        <ForgotPasswordContainer />
      </Col>
    </Row>
  </div>
);

ForgotPasswordPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default ForgotPasswordPage;
