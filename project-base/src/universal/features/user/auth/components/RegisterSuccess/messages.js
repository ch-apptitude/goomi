/*
 * RegisterSuccess Messages
 *
 * This contains all the text for the RegisterSuccess component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  success: {
    id: 'user.auth.RegisterSuccess.success',
    defaultMessage: 'Félicitations, votre inscription est terminée !',
  },
  body: {
    id: 'user.auth.RegisterSuccess.body',
    defaultMessage: 'Une demande de confirmation vous a été envoyée par email à l’adresse {email}.',
  },
  continue: {
    id: 'user.auth.RegisterSuccess.continue',
    defaultMessage: 'Continuer',
  },
});
