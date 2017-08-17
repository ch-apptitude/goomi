/**
*
* ResetPasswordForm
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import { Row, Col } from 'react-flexbox-grid';

import Box from 'features/common_ui/components/Box';
import { GreenButton } from 'features/common_ui/components/Button';
import Field from 'features/common_ui/form/Field';

import validate from './validate';
import messages from './messages';
import styles from './styles.scss';

class ResetPasswordForm extends Component {
  renderForm = ({ submitForm }) => {
    const { intl } = this.context;
    return (
      <form onSubmit={submitForm} className={styles.ResetPasswordForm} name="ResetPasswordForm">
        <Box>
          <Field type="password" field="password" label={intl.formatMessage(messages.password)} autoFocus />
          <Field type="password" field="repassword" label={intl.formatMessage(messages.repassword)} />
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
  };

  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <Form onSubmit={onSubmit} validate={validate} onChange={onChange}>
        {this.renderForm}
      </Form>
    );
  }
}

ResetPasswordForm.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
};

ResetPasswordForm.contextTypes = {
  intl: PropTypes.object.isRequired,
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default ResetPasswordForm;
