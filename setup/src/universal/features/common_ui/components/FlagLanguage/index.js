/**
*
* FlagLanguage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags';

import Text from 'features/common_ui/components/Text';

import messages from './messages';
import styles from './styles.scss';

const getCode = (lang) => {
  if (lang === 'en') {
    return 'gb';
  }
  return lang;
};

const FlagLanguage = ({ lang, hasLabel }, { intl }) => (
  <div className={styles.FlagLanguage}>
    <Flag code={getCode(lang)} className={styles.FlagLanguage__Flag} />
    {hasLabel && (
      <Text domElement="h3" size="textBig" color="black_light">
        {intl.formatMessage(messages[lang])}
      </Text>
    )}
  </div>
);

FlagLanguage.contextTypes = {
  intl: PropTypes.object.isRequired,
};

FlagLanguage.propTypes = {
  lang: PropTypes.oneOf(['fr', 'de', 'en']).isRequired,
  hasLabel: PropTypes.bool,
};

FlagLanguage.defaultProps = {
  hasLabel: false,
};

export default FlagLanguage;
