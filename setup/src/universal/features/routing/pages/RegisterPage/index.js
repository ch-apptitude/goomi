/*
 *
 * RegisterPage
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import messages from './messages';

const StyledRegisterPage = styled.div`
  height: 100%;
`;

const RegisterPage = ({ children }, { intl }) => (
  <StyledRegisterPage>
    <Helmet title={intl.formatMessage(messages.register)} />
    <Row>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
        {children}
      </Col>
    </Row>
  </StyledRegisterPage>
);
RegisterPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};
RegisterPage.propTypes = {
  children: PropTypes.element.isRequired,
};
export default RegisterPage;
