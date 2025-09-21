import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.publish("access_token", function () {
  if (!this.userId) return this.ready();
  return Meteor.users.find(
    { _id: this.userId },
    { fields: { 'services.facebook.accessToken': 1 } }
  );
});

Accounts.onCreateUser(function (options, user) {
  // Use data provided by accounts-facebook directly
  if (options.profile && user.services && user.services.facebook) {
    const fb = user.services.facebook;
    options.profile.picture = `http://graph.facebook.com/${fb.id}/picture/?type=large`;
    options.profile.first_name = fb.first_name;
    options.profile.last_name = fb.last_name;
    options.profile.gender = fb.gender;
    options.profile.email = fb.email;
    options.profile.has_pledged = false;
    options.profile.message = "";
    user.profile = options.profile;
  }
  return user;
});

// Make sure we're using the correct API keys for the dev / live servers
ServiceConfiguration.configurations.removeAsync({ service: 'facebook' });

const isLocal = Meteor.absoluteUrl() === 'http://localhost:3000/';
ServiceConfiguration.configurations.upsertAsync(
  { service: 'facebook' },
  {
    $set: {
      appId: isLocal ? '1613725145554917' : '1607296829531082',
      loginStyle: 'popup',
      secret: isLocal ? 'abf743e3c480aa4894cb474fdf2f3192' : '4b17ab078aaee007dd0a0ad7b1645839'
    }
  }
);

Meteor.publish("current_user_data", function () {
  if (!this.userId) return this.ready();
  return Meteor.users.find(
    { _id: this.userId },
    { fields: { 'profile.first_name': 1, 'profile.last_name': 1, 'profile.picture': 1 } }
  );
});
