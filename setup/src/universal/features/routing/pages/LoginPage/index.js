/*
 *
 * LoginPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import LoginForm from 'features/user/auth/components/LoginForm';

import messages from './messages';

const StyledLoginPage = styled.div`
  height: 100%;
`;

const LoginPage = (props, { intl }) => (
  <StyledLoginPage>
    <Helmet title={intl.formatMessage(messages.login)} />
    <Row>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4}>
        <LoginForm />
      </Col>
    </Row>
  </StyledLoginPage>
);

LoginPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default LoginPage;
