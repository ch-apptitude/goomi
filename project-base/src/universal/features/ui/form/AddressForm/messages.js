/*
 * AddressForm Messages
 *
 * This contains all the text for the AddressForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  address: {
    id: 'ui.form.AddressForm.address',
    defaultMessage: 'Rue et numéro',
  },
  zip: {
    id: 'ui.form.AddressForm.zip',
    defaultMessage: 'NPA',
  },
  locality: {
    id: 'ui.form.AddressForm.locality',
    defaultMessage: 'Localité',
  },
  country: {
    id: 'ui.form.AddressForm.country',
    defaultMessage: 'Pays',
  },
});
