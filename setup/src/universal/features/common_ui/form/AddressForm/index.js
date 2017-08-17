/**
*
* AddressForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Form } from 'react-form';
import { Row, Col } from 'react-flexbox-grid';

import countries from 'services/countries';

import Field from 'features/common_ui/form/Field';

import messages from './messages';

const AddressForm = ({ validator, required, asCountry }) => (
  <Form validate={validator}>
    <Row>
      <Col xs={12} sm={12} md={12}>
        <Field
          field="streetAndNumber"
          type="text"
          required={required}
          label={<FormattedMessage {...messages.address} />}
          placeholder={messages.address}
        />
      </Col>
      <Col xs={12} sm={6} md={6}>
        <Field
          field="zip"
          type="text"
          required={required}
          label={<FormattedMessage {...messages.zip} />}
          placeholder={messages.zip}
        />
      </Col>
      <Col xs={12} sm={6} md={6}>
        <Field
          field="locality"
          required={required}
          type="text"
          label={<FormattedMessage {...messages.locality} />}
          placeholder={messages.locality}
        />
      </Col>
      {asCountry && (
        <Col xs={12} sm={6} md={6}>
          <Field
            field="country"
            required={required}
            type="select"
            items={countries}
            label={<FormattedMessage {...messages.country} />}
            placeholder={messages.country}
          />
        </Col>
      )}
    </Row>
  </Form>
);

AddressForm.propTypes = {
  validator: PropTypes.func,
  required: PropTypes.bool,
  asCountry: PropTypes.bool,
};

AddressForm.defaultProps = {
  validator: () => ({}),
  required: false,
  asCountry: false,
};

export default AddressForm;
