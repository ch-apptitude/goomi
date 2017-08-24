/**
*
* ResetPasswordForm
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import { Row, Col } from 'react-flexbox-grid';

import Theme from 'assets/theme';
import Box from 'features/common_ui/components/Box';
import { GreenButton } from 'features/common_ui/components/Button';
import Field from 'features/common_ui/form/Field';

import validate from './validate';
import messages from './messages';

class ResetPasswordForm extends Component {
  renderForm = ({ submitForm }) => {
    return (
      <form onSubmit={submitForm} name="ResetPasswordForm">
        <Box>
          <Field type="password" field="password" label={messages.password} autoFocus />
          <Field type="password" field="repassword" label={messages.repassword} />
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

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default ResetPasswordForm;
