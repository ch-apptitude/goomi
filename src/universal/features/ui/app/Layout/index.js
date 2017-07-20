/**
*
* Layout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Header from 'features/ui/app/Header';
import Modal from 'features/ui/components/Modal';

import styles from './styles.scss';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Header />
    <Grid fluid className={styles.Layout__Content}>
      <Row>
        <Col xs={12} md={10} mdOffset={1}>
          {React.Children.map(children, (child) => child)}
        </Col>
        <Col xs={12} md={12} className={styles.Layout__Footer} />
      </Row>
    </Grid>
    <Modal />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

export default Layout;
