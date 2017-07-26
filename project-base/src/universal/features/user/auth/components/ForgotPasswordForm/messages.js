/*
 * ForgotPasswordForm Messages
 *
 * This contains all the text for the ForgotPasswordForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  email: {
    id: 'user.auth.ResetPasswordForm.email',
    defaultMessage: 'Entrez votre adresse mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.',
  },
  emailPlaceholder: {
    id: 'user.auth.ResetPasswordForm.emailPlaceholder',
    defaultMessage: 'Entrez votre adresse',
  },
  save: {
    id: 'user.auth.ForgotPasswordForm.save',
    defaultMessage: 'Recevoir un email de réinitialisation',
  },
});
