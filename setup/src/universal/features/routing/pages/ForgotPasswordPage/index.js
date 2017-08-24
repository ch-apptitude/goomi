/*
 *
 * ForgotPasswordPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import ForgotPasswordContainer from 'features/user/auth/containers/ForgotPasswordContainer';

import messages from './messages';

const StyleForgotPasswordPage = styled.div`
  height: 100%;
`;

const ForgotPasswordPage = (_, { intl }) => (
  <StyleForgotPasswordPage>
    <Helmet title={intl.formatMessage(messages.forgotPasswordPage)} />
    <Row>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
        <ForgotPasswordContainer />
      </Col>
    </Row>
  </StyleForgotPasswordPage>
);

ForgotPasswordPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default ForgotPasswordPage;
