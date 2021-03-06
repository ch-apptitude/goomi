/**
*
* ChangePasswordForm
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Theme from 'assets/theme';
import Box from 'features/common_ui/components/Box';
import Text from 'features/common_ui/components/Text';
import { GreenButton } from 'features/common_ui/components/Button';
import Field from 'features/common_ui/form/Field';

import errorMessages from 'features/common_ui/form/error-messages';
import validate from './validate';
import messages from './messages';
 

const StyledResult = styled(Text)`
  text-align: center;
  width: 100%;
`;

class ChangePasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      succeed: false,
      failed: false,
    };
  }

  onSubmit = (values, props, form, instance) => {
    this.setState({
      loading: true,
      succeed: false,
      failed: false,
    });
    this.props.onSubmit(values).then(this.onSucceed.bind(this, instance)).catch(this.onFailed);
  };

  onSucceed(instance) {
    this.setState({
      loading: false,
      succeed: true,
      failed: false,
    });
    instance.resetForm();
    setTimeout(
      () =>
        this.setState({
          loading: false,
          succeed: false,
          failed: false,
        }),
      2000,
    );
  }

  onFailed = ({ code }) => {
    this.setState({
      loading: false,
      succeed: false,
      failed: code,
    });
  };

  renderForm = ({ submitForm }) => {
    const { intl } = this.context;
    const { loading, succeed, failed } = this.state;
    return (
      <form onSubmit={submitForm} name="ChangePasswordForm">
        <Box>
          <Field type="password" field="oldPassword" label={messages.oldPassword} autoFocus />
          <Field type="password" field="password" label={messages.password} />
          <Field type="password" field="repassword" label={messages.repassword} />
          {!!failed && (
            <StyledResult tag="h1" color={Theme.Colors.error} message={errorMessages[failed]} />
          )}
        </Box>
        <Box smallHeight borderTop>
          <Row>
            <Col xs={12}>
              {!succeed && <GreenButton type="submit" message={messages.save} disabled={loading} block/>}
              {succeed && (
                <StyledResult tag="h1" color={Theme.Colors.success} message={messages.succeed} />
              )}
            </Col>
          </Row>
        </Box>
      </form>
    );
  };

  render() {
    const { onChange } = this.props;
    return (
      <Form onSubmit={this.onSubmit} validate={validate} onChange={onChange}>
        {this.renderForm}
      </Form>
    );
  }
}

ChangePasswordForm.defaultProps = {
  onChange: () => {},
  onSubmit: () => {},
};

ChangePasswordForm.contextTypes = {
  intl: PropTypes.object.isRequired,
};

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default ChangePasswordForm;
