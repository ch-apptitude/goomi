/**
*
* NotFound
*
*/

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Text from 'features/common_ui/components/Text';

import messages from './messages';

const Container = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;

const Title = styled(Text)`margin-bottom: 30px;`;

const NotFound = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <Text message={messages.errorTitle} tag="h1" size={Theme.Metrics.title} />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Title message={messages.title} tag="h2" size={Theme.Metrics.subTitle} />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Text message={messages.body} tag="p" />
      </Col>
    </Row>
  </Container>
);

export default NotFound;
