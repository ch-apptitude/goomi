import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import LanguageProvider from 'features/language/LanguageProvider';
import routes from 'features/routing/routes';
import Text from '../universal/features/common_ui/components/Text';

/* eslint-disable */
class Root extends Component {
  render() {
    const { history, store, translatedMessages } = this.props;

    return (
      <Provider key="provider" store={store}>
        <LanguageProvider key="intl" messages={translatedMessages}>
          <Router key="router" history={history} routes={routes} />
        </LanguageProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  translatedMessages: PropTypes.object.isRequired,
};

export default Root;
