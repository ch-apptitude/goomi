/**
*
* LoginForm
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';

import { Form } from 'react-form';

import HOCAuth from 'features/user/hoc/HOCAuth';

import Field from 'features/common_ui/form/Field';
import Button, { GreenButton } from 'features/common_ui/components/Button';
import Text from 'features/common_ui/components/Text';
import Box from 'features/common_ui/components/Box';

import errorMessages from 'features/common_ui/form/error-messages';

import messages from './messages';
import styles from './styles.scss';
import validate from './validate';

class LoginForm extends PureComponent {
  renderForm({ submitForm, getError }) {
    return (
      <form onSubmit={submitForm} name="loginForm" className={styles.LoginForm}>
        <Box>
          <Row>
            <Col xs={12}>
              <Text className={styles.LoginForm__Title} domElement="h1" size="title">
                <FormattedMessage {...messages.login} />
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Field field="email" type="email" label={<FormattedMessage {...messages.email} />} autoFocus />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Field field="password" type="password" label={<FormattedMessage {...messages.password} />} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Button
                className={styles.LoginForm__Forgot}
                linkTo="/forgot-password"
                color="black"
                tiny
                noBackground
                message={messages.password_forgot}
              />
            </Col>
          </Row>
        </Box>
        {!!getError('general') && (
          <Text className={styles.LoginForm__Error} domElement="p" color="red" size="textBig">
            {getError('general')}
          </Text>
        )}
        <Box borderTop smallHeight>
          <Row end="xs">
            <Col xs={12} sm={3}>
              <GreenButton className={styles.LoginForm__Submit} type="submit" message={messages.login} />
            </Col>
          </Row>
        </Box>
      </form>
    );
  }

  handleSubmitionErrors(form, { code, errors }) {
    const { intl } = this.context;
    if (!errors) {
      form.setAllTouched(true, {
        errors: {
          general: errorMessages[code] ? intl.formatMessage(errorMessages[code]) : `Unsupported Error : ${code}`,
        },
      });
    } else if (errors) {
      form.setAllTouched(true, { errors });
    }
  }

  submit = (data, state, props, form) => {
    const { router } = this.context;
    new Promise((resolve, reject) => {
      this.props.login(data, { resolve, reject });
    })
      .then(() => {
        const matches = /^\/(register|login)$/.exec(router.location.pathname);
        if (matches) {
          router.replace('/');
        } else {
          router.goBack();
        }
      })
      .catch(this.handleSubmitionErrors.bind(this, form));
  };

  render() {
    return (
      <Form onSubmit={this.submit} validate={validate}>
        {this.renderForm}
      </Form>
    );
  }
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default HOCAuth(LoginForm);
