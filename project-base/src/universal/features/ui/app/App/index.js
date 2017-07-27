import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'assets/style/font.scss';
import config from 'appConfig';

import styles from './styles.scss';

const App = ({ children }) => <div className={styles.App}>This is an Application</div>;

App.propTypes = { children: PropTypes.element };

export default App;
