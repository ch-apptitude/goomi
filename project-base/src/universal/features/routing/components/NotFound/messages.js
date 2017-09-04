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
    defaultMessage: 'Error 404',
  },
  body: {
    id: 'routing.NotFound.body',
    defaultMessage: "This page doesn't exists.",
  },
  continue: {
    id: 'routing.NotFound.continue',
    defaultMessage: 'Back to home page.',
  },
});
