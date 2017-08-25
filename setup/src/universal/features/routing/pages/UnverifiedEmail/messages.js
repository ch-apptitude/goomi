/*
 * UnverifiedEmail Messages
 *
 * This contains all the text for the UnverifiedEmail component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  checkYourMailBox: {
    id: 'routing.UnverifiedEmail.checkYourMailBox',
    defaultMessage: 'Email de confirmation renvoyé. Vérifiez votre boite mail.',
  },
  unverifiedEmail: {
    id: 'routing.UnverifiedEmail.unverifiedEmail',
    defaultMessage: 'Adresse mail non confirmée',
  },
  description: {
    id: 'routing.UnverifiedEmail.description',
    defaultMessage: `Pour utiliser les services de Goomi, vous devez confirmer votre adresse mail.
        Utilisez le lien de l'email que nous vous avons envoyé à l'adresse : {email}.`,
  },
  resendConfirmEmail: {
    id: 'routing.UnverifiedEmail.resendConfirmEmail',
    defaultMessage: 'demander un nouvel email de confirmation',
  },
  changeEmail: {
    id: 'routing.UnverifiedEmail.changeEmail',
    defaultMessage: "changer l'adresse mail de mon compte",
  },
  problemsWithEmail: {
    id: 'routing.UnverifiedEmail.problemsWithEmail',
    defaultMessage: 'Vous rencontrez un problème? Vous pouvez',
  },
  or: {
    id: 'routing.UnverifiedEmail.or',
    defaultMessage: 'ou',
  },
});
