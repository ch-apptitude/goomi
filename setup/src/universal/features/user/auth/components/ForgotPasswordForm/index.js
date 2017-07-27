/**
*
* ForgotPasswordForm
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import { Row, Col } from 'react-flexbox-grid';

import Box from 'features/ui/components/Box';
import { GreenButton } from 'features/ui/components/Button';
import Field from 'features/ui/form/Field';

import validate from './validate';
import messages from './messages';
import styles from './styles.scss';

const renderForm = (intl, { submitForm }) => (
  <form onSubmit={submitForm} className={styles.ForgotPasswordForm} name="ForgotPasswordForm">
    <Box>
      <Field
        type="email"
        field="email"
        label={intl.formatMessage(messages.email)}
        placeholder={messages.emailPlaceholder}
        autoFocus
      />
    </Box>
    <Box smallHeight borderTop>
      <Row middle="xs">
        <Col xs={12}>
          <GreenButton type="submit" message={messages.save} fitWidth />
        </Col>
      </Row>
    </Box>
  </form>
);

const ForgotPasswordForm = ({ onSubmit }, { intl }) => (
  <Form onSubmit={onSubmit} validate={validate}>
    {renderForm.bind(this, intl)}
  </Form>
);

ForgotPasswordForm.defaultProps = {
  onSubmit: () => {},
};

ForgotPasswordForm.contextTypes = {
  intl: PropTypes.object.isRequired,
};

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ForgotPasswordForm;
