/**
*
* RegisterForm
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Form } from 'react-form';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Field from 'features/common_ui/form/Field';
import { GreenButton } from 'features/common_ui/components/Button';
import Text from 'features/common_ui/components/Text';
import Box from 'features/common_ui/components/Box';
import { Row, Col } from 'react-flexbox-grid';

import messages from './messages';

import validate from './validate';

const StyledForm = styled.form`
  height: 100%;
  width: 100%;

  .title {
    padding-bottom: 30px;
  }
`;

class RegisterForm extends PureComponent {
  renderForm({ submitForm, getError }) {
    return (
      <StyledForm onSubmit={submitForm} name="registerForm">
        <Row>
          <Col xs={12}>
            <Text className="title" tag="h1" size={Theme.Metrics.title}>
              <FormattedMessage {...messages.register} />
            </Text>
          </Col>
        </Row>
        <Row between="xs">
          <Col xs={12} sm={6}>
            <Field field="firstName" type="text" required label={messages.firstName} autoFocus />
          </Col>
          <Col xs={12} sm={6}>
            <Field field="lastName" type="text" required label={messages.lastName} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field field="email" type="email" required label={messages.email} />
          </Col>
        </Row>

        <Row between="xs">
          <Col xs={12} sm={6}>
            <Field field="pwd" type="password" required label={messages.password} />
          </Col>
          <Col xs={12} sm={6}>
            <Field field="repwd" type="password" required label={messages.repassword} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field field="cgv" type="checkbox" label={messages.cgv} />
          </Col>
        </Row>
        {!!getError('general') && <Text tag="p" color={Theme.Colors.error} message={getError('general')} />}

        <Row end="xs">
          <Col xs={6} sm={3}>
            <GreenButton type="submit" message={messages.submitRegister} />
          </Col>
        </Row>
      </StyledForm>
    );
  }

  render() {
    const { onSubmit, defaultValues } = this.props;
    return (
      <Form onSubmit={onSubmit} defaultValues={defaultValues} validate={validate}>
        {this.renderForm}
      </Form>
    );
  }
}

RegisterForm.contextTypes = {
  intl: PropTypes.object.isRequired,
};

RegisterForm.defaultProps = {
  onSubmit: console.log, // eslint-disable-line no-console
  defaultValues: undefined,
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.any,
};

export default RegisterForm;
