/*
 * Notification Messages
 *
 * This contains all the text for the Notification component.
 */
import { defineMessages } from 'react-intl';

export const messagesTitle = defineMessages({
  success: {
    id: 'ui.Notifications.title.success',
    defaultMessage: 'Succès',
  },
  error: {
    id: 'ui.Notifications.title.error',
    defaultMessage: 'Erreur',
  },
});

export const messages = defineMessages({
  forgotPasswordSuccess: {
    id: 'ui.Notifications.message.forgotPasswordSuccess',
    defaultMessage: 'Vous recevrez un e-mail dans quelques minutes comprenant un lien pour réinitialiser votre mot de passe',
  },
  tokenExpired: {
    id: 'ui.Notifications.message.tokenExpired',
    defaultMessage: 'Le lien est invalide ou expiré',
  },
  resetPasswordSuccess: {
    id: 'ui.Notifications.message.resetPasswordSuccess',
    defaultMessage: 'Votre mot de passe a bien été modifié',
  },
  networkError: {
    id: 'ui.Notifications.message.networkError',
    defaultMessage: 'Un problème est survenu. Nous allons resoudre le problème au plus vite. Merci de votre compréhension.',
  },
  unkownError: {
    id: 'ui.Notifications.message.unkownError',
    defaultMessage: "Une erreur est survenu, merci de contacter l'administrateur du système.",
  },
  USER_UPDATE_RESPONSE_SUCCESS: {
    id: 'ui.Notifications.message.USER_UPDATE_RESPONSE_SUCCESS',
    defaultMessage: 'Vos informations utilisateur ont bien été mises à jour.',
  },
  CHANGE_PASSWORD_RESPONSE_SUCCESS: {
    id: 'ui.Notifications.message.CHANGE_PASSWORD_RESPONSE_SUCCESS',
    defaultMessage: 'Votre mot de pase a bien été mis à jour.',
  },
});
