/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import enTranslationMessages from 'features/language/translations/en.json';
// IMPORT FOR GENERATOR

[
  en,
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
  en: formatTranslationMessages(enTranslationMessages),
  // MESSAGES FOR GENERATOR
};
