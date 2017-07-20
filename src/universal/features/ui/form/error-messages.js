/*
 * Form Messages
 *
 * This contains all the text for the Login component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  requiredPassword: {
    id: 'ui.form.error.requiredPassword',
    defaultMessage: 'Veuillez renseigner votre mot de passe.',
  },
  RepasswordNotEqual: {
    id: 'ui.form.error.RepasswordNotEqual',
    defaultMessage: "Le mot de passe ne correspond pas à l'original",
  },
  requiredEmail: {
    id: 'ui.form.error.requiredEmail',
    defaultMessage: "Veuillez renseigner l'adresse email",
  },
  invalidEmail: {
    id: 'ui.form.error.invalidEmail',
    defaultMessage: "L'adresse email n'est pas valide.",
  },
  requiredFirstName: {
    id: 'ui.form.error.requiredFirstName',
    defaultMessage: 'Veuillez renseigner votre prénom.',
  },
  requiredLastName: {
    id: 'ui.form.error.requiredLastName',
    defaultMessage: 'Veuillez renseigner votre nom.',
  },
  requiredCgv: {
    id: 'ui.form.error.requiredCgv',
    defaultMessage: 'Vous devez accepter les conditions générales pour continuer.',
  },
  requiredPicture: {
    id: 'ui.form.error.requiredPicture',
    defaultMessage: 'Veulliez ajouter une photo de profile.',
  },
  requiredBirthDate: {
    id: 'ui.form.error.requiredBirthDate',
    defaultMessage: 'Veulliez renseigner votre Date de naissance.',
  },
});
