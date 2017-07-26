/*
 * ResetPasswordResponse Messages
 *
 * This contains all the text for the ResetPasswordResponse component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  loading: {
    id: 'user.auth.ResetPasswordResponse.loading',
    defaultMessage: 'Réinitialisation du mot de passe en cours.',
  },
  success: {
    id: 'user.auth.ResetPasswordResponse.success',
    defaultMessage:
      "Votre mot de passe a été changé. Vous allez être rediriger automatiquement sur la page d'accueil dans quelques secondes.",
  },
});
