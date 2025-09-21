import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import en from '../lang/en.i18n.json';
import pt from '../lang/pt.i18n.json';
import et from '../lang/et.i18n.json';

const dictionaries = { en, pt, et };

function getCurrentLanguage() {
  return Session.get('language') || 'en';
}

Template.registerHelper('_', function (key) {
  const lang = getCurrentLanguage();
  const dict = dictionaries[lang] || dictionaries.en;
  return (dict && dict[key]) || key;
});

// Ensure a default language is set
if (!Session.get('language')) {
  Session.set('language', 'en');
}

