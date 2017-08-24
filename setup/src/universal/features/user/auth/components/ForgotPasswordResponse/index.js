/**
*
* ForgotPasswordResponse
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Theme from 'assets/theme';
import Box from 'features/common_ui/components/Box';
import Text from 'features/common_ui/components/Text';

import errorMessages from 'features/common_ui/form/error-messages';
import messages from './messages';


const ForgotPasswordResponse = ({ succeed, error, loading }) => {
  if (succeed) {
    return (
      <Box>
        <Text tag="h1" size={Theme.Metrics.title} message={messages.success} />
      </Box>
    );
  } else if (error) {
    return (
      <Box>
        <Text tag="h1" size={Theme.Metrics.title} message={errorMessages[error]} />
      </Box>
    );
  } else if (loading) {
    return (
      <Box>
        <Text tag="h1" size={Theme.Metrics.title} message={messages.loading} />
      </Box>
    );
  }
  return <Box />;
};

ForgotPasswordResponse.defaultProps = {
  succeed: false,
  error: undefined,
  loading: false,
};

ForgotPasswordResponse.propTypes = {
  succeed: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default ForgotPasswordResponse;
