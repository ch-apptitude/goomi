/*
 *
 * Register
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import messages from './messages';
import styles from './styles.scss';

const RegisterPage = ({ children }, { intl }) => (
  <div className={styles.RegisterPage}>
    <Helmet title={intl.formatMessage(messages.register)} />
    <Row className={styles.RegisterPage__RegisterForm}>
      <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
        {children}
      </Col>
    </Row>
  </div>
);
RegisterPage.contextTypes = {
  intl: PropTypes.object.isRequired,
};
RegisterPage.propTypes = {
  children: PropTypes.element.isRequired,
};
export default RegisterPage;
