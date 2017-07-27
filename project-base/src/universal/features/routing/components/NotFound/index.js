/**
*
* NotFound
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';

import messages from './messages';
import styles from './styles.scss';

const NotFound = () => (
  <div className={styles.NotFound}>
    <Row>
      <Col xs={12}>
        <Text className={styles.NotFound__ErrorTitle} domElement="h1" color="red" size="title">
          <FormattedMessage {...messages.errorTitle} />
        </Text>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Text className={styles.NotFound__Title} domElement="h1" size="title">
          <FormattedMessage {...messages.title} />
        </Text>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Text className={styles.NotFound__Body} domElement="p">
          <FormattedMessage {...messages.body} />
        </Text>
      </Col>
    </Row>
  </div>
);

export default NotFound;
