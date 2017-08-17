/**
*
* ForgotPasswordResponse
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Box from 'features/common_ui/components/Box';

import errorMessages from 'features/common_ui/form/error-messages';
import messages from './messages';
import styles from './styles.scss';

const ForgotPasswordResponse = ({ succeed, error, loading }) => {
  if (succeed) {
    return (
      <Box className={styles.ForgotPasswordResponse}>
        <FormattedMessage {...messages.success} />
      </Box>
    );
  } else if (error) {
    return (
      <Box className={styles.ForgotPasswordResponse}>
        <FormattedMessage {...errorMessages[error]} />
      </Box>
    );
  } else if (loading) {
    return (
      <Box className={styles.ForgotPasswordResponse}>
        <FormattedMessage {...messages.loading} />
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
