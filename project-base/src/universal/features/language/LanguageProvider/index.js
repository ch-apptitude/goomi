import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import { selectLocale } from 'features/language/selectors';

const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider locale={locale} messages={messages[locale]}>
    {Children.only(children)}
  </IntlProvider>
);

LanguageProvider.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

const mapStateToProps = createStructuredSelector({ locale: selectLocale() });

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
