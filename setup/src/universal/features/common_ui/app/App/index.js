import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from 'features/common_ui/app/Layout';
import Notification from 'features/common_ui/components/Notification';
import Theme from 'assets/theme';

import './GlobalStyle';
import config from 'appConfig';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  font-family: Palanquin;
  font-weight: 400;
  color: #545352;
  overflow-x: hidden;

  &:before {
    content: "\e900";
    position: absolute;
    font-size: 0;
  }

  & * {
    font-family: Palanquin;
  }
`;

const App = ({ children }) => (
  <AppContainer>
    <div className="App__Overlay" />
    <Helmet {...config.app.head} />
    <Notification />
    <Layout>{children}</Layout>
  </AppContainer>
);

App.propTypes = { children: PropTypes.element.isRequired };

export default App;
