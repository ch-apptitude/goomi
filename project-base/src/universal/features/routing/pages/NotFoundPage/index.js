/*
 *
 * NotFound
 *
 */

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import NotFound from 'features/routing/components/NotFound';

import messages from './messages';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const NotFoundPage = (props, { intl }) => (
  <Container>
    <Helmet title={intl.formatMessage(messages.notFound)} />
    <Row>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
        <NotFound />
      </Col>
    </Row>
  </Container>
);
NotFoundPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};
export default NotFoundPage;
