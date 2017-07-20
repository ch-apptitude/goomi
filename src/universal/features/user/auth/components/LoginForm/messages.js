/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  password_forgot: {
    id: 'user.auth.User.forgot',
    defaultMessage: 'Mot de passe oublié ? ',
  },
  email: {
    id: 'user.auth.User.email',
    defaultMessage: 'E-mail',
  },
  password: {
    id: 'user.auth.User.password',
    defaultMessage: 'Mot de passe',
  },
  firstName: {
    id: 'user.auth.User.firstName',
    defaultMessage: 'Prénom',
  },
  lastName: {
    id: 'user.auth.User.lastName',
    defaultMessage: 'Nom',
  },
  login: {
    id: 'user.auth.User.login',
    defaultMessage: 'Connexion',
  },
});
