import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import './templates/elsa.html';
import './views/elsa_client.js';

Meteor.startup(() => {
  Blaze.render(Template.layout, document.body);
});

// Import any other client-side modules here
// This file serves as the main entry point for all client-side code