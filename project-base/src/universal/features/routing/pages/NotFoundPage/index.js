/*
 *
 * NotFound
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import NotFound from 'features/routing/components/NotFound';

import messages from './messages';
import styles from './styles.scss';

const NotFoundPage = (props, { intl }) => (
  <div className={styles.NotFoundPage}>
    <Helmet title={intl.formatMessage(messages.notFound)} />
    <Row>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
        <NotFound />
      </Col>
    </Row>
  </div>
);
NotFoundPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};
export default NotFoundPage;
