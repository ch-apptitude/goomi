/**
*
* Layout
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Header from 'features/common_ui/app/Header';
import Footer from 'features/common_ui/app/Footer';
import Modal from 'features/common_ui/components/Modal';

const LayoutContainer = styled.div`height: 100%;`;

const StyledBody = styled.div`height: calc(100% - ${Theme.Metrics.header_height}px);`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    <StyledBody>{React.Children.map(children, (child) => child)}</StyledBody>
    <Modal />
    <Footer />
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
};

export default Layout;
