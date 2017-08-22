import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import Layout from 'features/common_ui/app/Layout';
import Notification from 'features/common_ui/components/Notification';
import Theme from 'assets/theme';

import './GlobalStyle';
import config from 'appConfig';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  font-family: 'SofiaPro';
  font-weight: 400;
  color: #545352;
  overflow-x: hidden;

  &:before {
    content: "\e900";
    position: absolute;
    font-size: 0;
  }

  & * {
    font-family: $font-family;
  }
`;

const App = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <AppContainer>
      <div className="App__Overlay" />
      <Helmet {...config.app.head} />
      <Notification />
      <Layout>{children}</Layout>
    </AppContainer>
  </ThemeProvider>
);

App.propTypes = { children: PropTypes.element.isRequired };

export default App;
