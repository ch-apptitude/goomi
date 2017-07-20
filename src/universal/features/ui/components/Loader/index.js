/**
*
* Loader
*
*/

import React from 'react';

import styles from './styles.scss';

const Loader = () => (
  <div className={`${styles.Loader} Loader`}>
    <div className={styles.Loader__Spiner} />
  </div>
);

export default Loader;
