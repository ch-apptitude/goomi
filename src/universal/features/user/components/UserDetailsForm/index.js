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

import Field from 'features/ui/form/Field';
import { GreenButton } from 'features/ui/components/Button';
import Text from 'features/ui/components/Text';
import Box from 'features/ui/components/Box';

import messages from './messages';
import validate from './validate';
import styles from './styles.scss';

class EditUserForm extends PureComponent {
  confirmEmail = () => {
    if (this.props.sendNewConfirmEmail && this.props.sendNewConfirmEmail.show) {
      return (
        <button onClick={this.props.sendNewConfirmEmail.func} className={styles.UserDetailsForm__ConfirmEmail}>
          <FormattedMessage {...messages.resendConfirmEmail} />
        </button>
      );
    }
    return null;
  };

  renderForm = ({ submitForm }) => (
    <form onSubmit={submitForm} className={styles.UserDetailsForm} name="profileDetailsForm">
      <Box>
        <Row>
          <Col xs={12}>
            <Text className={styles.UserDetailsForm__Title} domElement="h1" size="title">
              <FormattedMessage {...messages.completeYourProfile} />
            </Text>
          </Col>
        </Row>

        <Row between="xs">
          <Col xs={12} sm={6}>
            <Field field="firstName" type="text" label={<FormattedMessage {...messages.firstName} />} autoFocus />
          </Col>
          <Col xs={12} sm={6}>
            <Field field="lastName" type="text" label={<FormattedMessage {...messages.lastName} />} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field field="email" type="email" label={<FormattedMessage {...messages.email} />} />
            {this.confirmEmail()}
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field field="birthdate" type="birthDate" label={<FormattedMessage {...messages.birthDate} />} />
          </Col>
        </Row>

        <Row>
          <Col xs={6} sm={3}>
            <GreenButton
              className={styles.UserDetailsForm__Submit}
              type="submit"
              message={this.props.defaultValues ? messages.save : messages.continue}
            />
          </Col>
        </Row>
      </Box>
    </form>
  );

  render() {
    const { onSubmit, defaultValues } = this.props;
    /* eslint-disable no-console */
    return (
      <Form onSubmit={onSubmit} validate={validate} defaultValues={defaultValues}>
        {this.renderForm}
      </Form>
    );
    /* eslint-enable no-console */
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
