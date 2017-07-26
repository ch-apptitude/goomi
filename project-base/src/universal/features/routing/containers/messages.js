import { defineMessages } from 'react-intl';

export default defineMessages({
  LoginRedirectBody: {
    id: 'routing.LoginRedirect.body',
    defaultMessage: 'Vous devez etre connecté pour y accéder.',
  },
  LoginRedirectRegister: {
    id: 'routing.LoginRedirect.register',
    defaultMessage: 'Créer un compte',
  },
  LoginRedirectLogin: {
    id: 'routing.LoginRedirect.login',
    defaultMessage: 'Me connecter',
  },
  ProfileCompleteRedirectBody: {
    id: 'routing.ProfileCompleteRedirect.body',
    defaultMessage: 'Vous devez compléter votre profil pour y accéder.',
  },
  ProfileCompleteRedirectButton: {
    id: 'routing.ProfileCompleteRedirect.button',
    defaultMessage: 'Compléter mon profil',
  },
  VerifiedRedirectBody: {
    id: 'routing.VerifiedRedirect.body',
    defaultMessage:
      'Vous devez valider votre addresse mail pour y accéder. Une demande de confirmation vous a été envoyée par email à l’adresse {email}.',
  },
  VerifiedRedirectBodyRedirect: {
    id: 'routing.VerifiedRedirect.VerifiedRedirectBodyRedirect',
    defaultMessage:
      "Un lien pour verifier votre adresse email vous a été envoyé à l’adresse {email}. Vous allez être redirigé vers la page d'acceuil.",
  },
  VerifiedRedirectButton: {
    id: 'routing.VerifiedRedirect.button',
    defaultMessage: 'Continuer',
  },
  resendConfirmEmail: {
    id: 'routing.resendConfirmEmail.button',
    defaultMessage: "Renvoyer l'email de validation",
  },
});
