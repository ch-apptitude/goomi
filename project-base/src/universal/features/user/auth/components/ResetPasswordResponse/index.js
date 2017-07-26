/**
*
* ResetPasswordResponse
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Box from 'features/ui/components/Box';

import errorMessages from 'features/ui/form/error-messages';
import messages from './messages';
import styles from './styles.scss';

const ResetPasswordResponse = ({ succeed, error, loading }) => {
  if (succeed) {
    return (
      <Box className={styles.ResetPasswordResponse}>
        <FormattedMessage {...messages.success} />
      </Box>
    );
  } else if (error) {
    return (
      <Box className={styles.ResetPasswordResponse}>
        <FormattedMessage {...errorMessages[error]} />
      </Box>
    );
  } else if (loading) {
    return (
      <Box className={styles.ResetPasswordResponse}>
        <FormattedMessage {...messages.loading} />
      </Box>
    );
  }
  return <Box />;
};

ResetPasswordResponse.defaultProps = {
  succeed: false,
  error: undefined,
  loading: false,
};

ResetPasswordResponse.propTypes = {
  succeed: PropTypes.bool,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default ResetPasswordResponse;
