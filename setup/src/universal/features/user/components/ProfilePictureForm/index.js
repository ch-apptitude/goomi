/**
*
* ProfilePictureForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Form } from 'react-form';

import Field from 'features/common_ui/form/Field';
import Text from 'features/common_ui/components/Text';
import { Row, Col } from 'react-flexbox-grid';

import messages from './messages';
import validate from './validate';
import styles from './styles.scss';

const renderInsideDZ = () => <FormattedMessage {...messages.chooseProfilePicture} />;

const renderForm = (required) => (
  <div>
    <Row center="xs">
      <Col xs={10} className={styles.ProfilePictureForm__Dropzone}>
        <Field field="picture" type="dropzone" content={renderInsideDZ()} autoFocus required={required} />
      </Col>
    </Row>
    <Row center="xs">
      <Col xs={6}>
        <Text className={styles.ProfilePictureForm__Title} domElement="h1" size="textBig" color="black_light">
          <FormattedMessage {...messages.profilePicture} />
        </Text>
      </Col>
    </Row>
  </div>
);

const ProfilePictureForm = ({ validator, required }) => <Form validate={validator}>{renderForm.bind(this, required)}</Form>;

ProfilePictureForm.propTypes = {
  validator: PropTypes.func,
  required: PropTypes.bool,
};

ProfilePictureForm.defaultProps = {
  validator: validate,
  required: false,
};

export default ProfilePictureForm;
