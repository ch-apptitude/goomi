/*
 * ChangePasswordForm Messages
 *
 * This contains all the text for the ChangePasswordForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  oldPassword: {
    id: 'user.auth.ResetPasswordForm.oldPassword',
    defaultMessage: 'Mot de passe actuel',
  },
  password: {
    id: 'user.auth.ResetPasswordForm.password',
    defaultMessage: 'Nouveau mot de passe',
  },
  repassword: {
    id: 'user.auth.ResetPasswordForm.repassword',
    defaultMessage: 'Confirmer le mot de passe',
  },
  save: {
    id: 'user.auth.ChangePasswordForm.save',
    defaultMessage: 'Changer mon mot de passe',
  },
  succeed: {
    id: 'user.auth.ChangePasswordForm.succeed',
    defaultMessage: 'Mot de passe changé !',
  },
});
