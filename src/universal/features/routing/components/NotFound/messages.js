/*
 * NotFound Messages
 *
 * This contains all the text for the NotFound component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  title: {
    id: 'routing.NotFound.title',
    defaultMessage: 'Désolé mais la page est introuvable.',
  },
  errorTitle: {
    id: 'routing.NotFound.errorTitle',
    defaultMessage: 'Erreur 404',
  },
  body: {
    id: 'routing.NotFound.body',
    defaultMessage: 'La page que vous cherchez n’existe pas ou l’URL est incorrecte.',
  },
  continue: {
    id: 'routing.NotFound.continue',
    defaultMessage: 'Retour à la page d’accueil',
  },
});
