/*
 * ForgotPasswordResponse Messages
 *
 * This contains all the text for the ForgotPasswordResponse component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  loading: {
    id: 'user.auth.ForgotPasswordResponse.loading',
    defaultMessage: 'Demande de réinitialisation de mot de passe en cours.',
  },
  success: {
    id: 'user.auth.ForgotPasswordResponse.success',
    defaultMessage:
      'Un lien permettant de réinitialiser votre mot de passe a été envoyé sur votre boite mail. Ce lien sera valable 10 jours.',
  },
});
