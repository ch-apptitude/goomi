/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import fr from 'react-intl/locale-data/fr';
import frTranslationMessages from 'features/language/translations/fr.json';
// IMPORT FOR GENERATOR

[
  fr,
  // FOREACH FOR GENERATOR
].forEach(addLocaleData);

const formatTranslationMessages = (messages) => {
  const formattedMessages = {};
  messages.forEach((message) => {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  });
  return formattedMessages;
};

export const translationMessages = {
  fr: formatTranslationMessages(frTranslationMessages),
  // MESSAGES FOR GENERATOR
};
