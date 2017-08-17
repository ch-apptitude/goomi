import React from 'react';
import PropTypes from 'prop-types';

import 'assets/style/font.scss';

import styles from './styles.scss';

const App = ({ children }) => <div className={styles.App}>{children}</div>;

App.propTypes = { children: PropTypes.element };

export default App;
