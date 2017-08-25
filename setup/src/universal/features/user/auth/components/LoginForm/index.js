/**
*
* LoginForm
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import { Form } from 'react-form';
import styled from 'styled-components';

import Theme from 'assets/theme';
import HOCAuth from 'features/user/hoc/HOCAuth';

import Field from 'features/common_ui/form/Field';
import Button, { GreenButton } from 'features/common_ui/components/Button';
import Text from 'features/common_ui/components/Text';

import errorMessages from 'features/common_ui/form/error-messages';

import messages from './messages';
import validate from './validate';

const StyledForm = styled.form`
  background-color: white;
  height: 100%;
  width: 100%;

  .submit {
    float: right;
  }

  .forgot {
    text-align: left;
  }

  .title {
    margin-bottom: 30px;
  }

  .error {
    padding: 10px 10px;
  }
`;

class LoginForm extends PureComponent {
  renderForm({ submitForm, getError }) {
    return (
      <StyledForm onSubmit={submitForm} name="loginForm">
        <Row>
          <Col xs={12}>
            <Text className="title" tag="h1" size={Theme.Metrics.title} message={messages.login} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Field field="email" type="email" label={messages.email} autoFocus />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Field field="password" type="password" label={messages.password} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button
              className="forgot"
              linkTo="/forgot-password"
              color={Theme.Colors.primary}
              message={messages.password_forgot}
            />
          </Col>
        </Row>
        {!!getError('general') && (
          <Text
            className="error"
            tag="p"
            color={Theme.Colors.orange_dark}
            size={Theme.Metrics.subTitle}
            message={getError('general')}
          />
        )}
        <Row end="xs">
          <Col xs={12} sm={3}>
            <GreenButton className="submit" type="submit" message={messages.login} />
          </Col>
        </Row>
      </StyledForm>
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
