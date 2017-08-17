/**
*
* RegisterForm
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Form } from 'react-form';

import Field from 'features/common_ui/form/Field';
import { GreenButton } from 'features/common_ui/components/Button';
import Text from 'features/common_ui/components/Text';
import Box from 'features/common_ui/components/Box';
import { Row, Col } from 'react-flexbox-grid';

import messages from './messages';
import styles from './styles.scss';
import validate from './validate';

class RegisterForm extends PureComponent {
  renderForm({ submitForm, getError }) {
    return (
      <form onSubmit={submitForm} className={styles.RegisterForm} name="registerForm">
        <Box>
          <Row>
            <Col xs={12}>
              <Text className={styles.RegisterForm__Title} domElement="h1" size="title">
                <FormattedMessage {...messages.register} />
              </Text>
            </Col>
          </Row>
          <Row between="xs">
            <Col xs={12} sm={6}>
              <Field field="firstName" type="text" required label={<FormattedMessage {...messages.firstName} />} autoFocus />
            </Col>
            <Col xs={12} sm={6}>
              <Field field="lastName" type="text" required label={<FormattedMessage {...messages.lastName} />} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Field field="email" type="email" required label={<FormattedMessage {...messages.email} />} />
            </Col>
          </Row>

          <Row between="xs">
            <Col xs={12} sm={6}>
              <Field field="pwd" type="password" required label={<FormattedMessage {...messages.password} />} />
            </Col>
            <Col xs={12} sm={6}>
              <Field field="repwd" type="password" required label={<FormattedMessage {...messages.repassword} />} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Field field="cgv" type="checkbox" label={<FormattedMessage {...messages.cgv} />} />
            </Col>
          </Row>
        </Box>
        {!!getError('general') && (
          <Text className={styles.RegisterForm__Error} domElement="p" color="red" size="textBig">
            {getError('general')}
          </Text>
        )}

        <Box borderTop smallHeight>
          <Row end="xs">
            <Col xs={6} sm={3}>
              <GreenButton className={styles.RegisterForm__Submit} type="submit" message={messages.submitRegister} />
            </Col>
          </Row>
        </Box>
      </form>
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
