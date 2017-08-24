/**
*
* EditUserForm
*
*/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';
import { Form } from 'react-form';
import styled from 'styled-components';

import Field from 'features/common_ui/form/Field';
import Button, { GreenButton } from 'features/common_ui/components/Button';
import Text from 'features/common_ui/components/Text';
import Box from 'features/common_ui/components/Box';

import messages from './messages';
import validate from './validate';

const StyledForm = styled.form`
  height: 100%;
  width: 100%;

  .rc-tabs-top {
    border-bottom: none;
  }

  confirmEmail {
    * {
      text-decoration-line: underline;
    }
  }
`;

class EditUserForm extends PureComponent {
  confirmEmail = () => {
    if (this.props.sendNewConfirmEmail && this.props.sendNewConfirmEmail.show) {
      return (
        <Button onClick={this.props.sendNewConfirmEmail.func} className="confirmEmail" message={messages.resendConfirmEmail} />
      );
    }
    return null;
  };

  renderForm = ({ submitForm }) => (
    <StyledForm onSubmit={submitForm} name="profileDetailsForm">
      <Box>
        <Row>
          <Col xs={12}>
            <Text tag="h1" size={Theme.Metrics.title} message={messages.completeYourProfile} />
          </Col>
        </Row>

        <Row between="xs">
          <Col xs={12} sm={6}>
            <Field field="firstName" type="text" label={messages.firstName} autoFocus />
          </Col>
          <Col xs={12} sm={6}>
            <Field field="lastName" type="text" label={messages.lastName} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field field="email" type="email" label={messages.email} />
            {this.confirmEmail()}
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field field="birthdate" type="birthDate" label={messages.birthDate} />
          </Col>
        </Row>

        <Row>
          <Col xs={6} sm={3}>
            <GreenButton
              className="submit"
              type="submit"
              message={this.props.defaultValues ? messages.save : messages.continue}
            />
          </Col>
        </Row>
      </Box>
    </StyledForm>
  );

  render() {
    const { onSubmit, defaultValues } = this.props;
    return (
      <Form onSubmit={onSubmit} validate={validate} defaultValues={defaultValues}>
        {this.renderForm}
      </Form>
    );
  }
}

EditUserForm.defaultProps = {
  onSubmit: console.log, // eslint-disable-line no-console
  defaultValues: undefined,
  sendNewConfirmEmail: undefined,
};

EditUserForm.contextTypes = {
  intl: PropTypes.object.isRequired,
};

EditUserForm.propTypes = {
  onSubmit: PropTypes.func,
  sendNewConfirmEmail: PropTypes.object,
  defaultValues: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    birthdate: PropTypes.instanceOf(Date),
  }),
};

export default EditUserForm;
