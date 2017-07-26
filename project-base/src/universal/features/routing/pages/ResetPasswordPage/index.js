/*
 *
 * ResetPasswordPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';

import ResetPasswordContainer from 'features/user/auth/containers/ResetPasswordContainer';

import messages from './messages';

const ResetPasswordPage = ({ location }, { intl }) => (
  <div>
    <Helmet title={intl.formatMessage(messages.resetPasswordPage)} />
    <Row>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
        <ResetPasswordContainer token={location.query.token} />
      </Col>
    </Row>
  </div>
);

ResetPasswordPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

ResetPasswordPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ResetPasswordPage;
