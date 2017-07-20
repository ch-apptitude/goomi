/*
 * RegisterForm Messages
 *
 * This contains all the text for the RegisterForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  register: {
    id: 'user.auth.RegisterForm.register',
    defaultMessage: 'Inscription',
  },
  firstName: {
    id: 'user.auth.RegisterForm.firstName',
    defaultMessage: 'Prénom',
  },
  lastName: {
    id: 'user.auth.RegisterForm.lastName',
    defaultMessage: 'Nom',
  },
  email: {
    id: 'user.auth.RegisterForm.email',
    defaultMessage: 'E-mail',
  },
  password: {
    id: 'user.auth.RegisterForm.password',
    defaultMessage: 'Mot de passe',
  },
  repassword: {
    id: 'user.auth.RegisterForm.repassword',
    defaultMessage: 'Retaper votre mot de passe',
  },
  cgv: {
    id: 'user.auth.RegisterForm.cgv',
    defaultMessage: "J'ai lu et j'accepte les conditions générales",
  },
  submitRegister: {
    id: 'user.auth.RegisterForm.submitRegister',
    defaultMessage: "S'inscrire",
  },
});
