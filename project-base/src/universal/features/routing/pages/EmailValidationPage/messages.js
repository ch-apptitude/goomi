/*
 * EmailValidationPage Messages
 *
 * This contains all the text for the EmailValidationPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  emailValidationPage: {
    id: 'routing.EmailValidationPage.emailValidationPage',
    defaultMessage: "Validation de l'email",
  },
  validationSucceed: {
    id: 'routing.EmailValidationPage.validationSucceed',
    defaultMessage: 'Email Validé avec succès',
  },
  user_already_validated: {
    id: 'routing.EmailValidationPage.validationFailed',
    defaultMessage: 'Cet email est déjà validé.',
  },
  validationInProgress: {
    id: 'routing.EmailValidationPage.validationInProgress',
    defaultMessage: "Validation de l'email en cours...",
  },
  continueProfileComplete: {
    id: 'routing.EmailValidationPage.continueProfileComplete',
    defaultMessage: 'Compléter mon profil',
  },
});
