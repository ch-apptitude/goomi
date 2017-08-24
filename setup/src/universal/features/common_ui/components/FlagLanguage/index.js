/**
*
* FlagLanguage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Flag from 'react-world-flags';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Text from 'features/common_ui/components/Text';

import messages from './messages';

const FlagLanguageContainer = styled.div`
  width: 100%;
  height: 100%;

  .flag {
    height: 15px;
    width: 24px;
    margin-bottom: -2px;
  }
  > * {
    display: inline-block;
  }
  
  > *:first-child {
    margin-right: 10px;
  }
`;

const getCode = (lang) => {
  if (lang === 'en') {
    return 'gb';
  }
  return lang;
};

const FlagLanguage = ({ lang, hasLabel, className, intl }) => (
  <FlagLanguageContainer className={className}>
    <Flag code={getCode(lang)} className="flag" />
    {hasLabel && (
      <Text tag="h3" message={messages[lang]} />
    )}
  </FlagLanguageContainer>
);

FlagLanguage.propTypes = {
  lang: PropTypes.oneOf(['fr', 'de', 'en']).isRequired,
  hasLabel: PropTypes.bool,
  intl: intlShape.isRequired,
};

FlagLanguage.defaultProps = {
  hasLabel: false,
};

export default injectIntl(FlagLanguage);
