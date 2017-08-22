/**
*
* Layout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Header from 'features/common_ui/app/Header';
import Footer from 'features/common_ui/app/Footer';
import Modal from 'features/common_ui/components/Modal';

const LayoutContainer = styled.div`height: 100%;`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    <Grid fluid>
      <Row>
        <Col xs={12} md={10} mdOffset={1}>
          {React.Children.map(children, (child) => child)}
        </Col>
      </Row>
    </Grid>
    <Modal />
    <Footer />
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

export default Layout;
