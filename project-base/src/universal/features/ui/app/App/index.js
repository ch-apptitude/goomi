import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Layout from 'features/ui/app/Layout';
import Notification from 'features/ui/components/Notification';
import VerticalDraggableLine from 'features/ui/components/VerticalDraggableLine';

import 'assets/style/font.scss';
import config from 'appConfig';

import styles from './styles.scss';

const App = ({ children }) => (
  <div className={styles.App}>
    <div className="App__Overlay" />
    <Helmet {...config.app.head} />
    <Notification />
    {JSON.stringify(config.environment)}
    <Layout>{children}</Layout>
  </div>
);

App.propTypes = { children: PropTypes.element.isRequired };

export default App;
