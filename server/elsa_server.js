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

// Configure Facebook OAuth via settings or environment variables
const envName = process.env.METEOR_ENV || process.env.NODE_ENV || (Meteor.isDevelopment ? 'development' : 'production');
const fbSettings = (Meteor.settings && Meteor.settings.facebook) || {};
const fbEnv = (typeof fbSettings === 'object' && (fbSettings[envName] || fbSettings)) || {};

const appId = fbEnv.appId || process.env.FACEBOOK_APP_ID || (Meteor.isDevelopment ? process.env.FACEBOOK_APP_ID_DEV : process.env.FACEBOOK_APP_ID_PROD);
const secret = fbEnv.secret || process.env.FACEBOOK_SECRET || (Meteor.isDevelopment ? process.env.FACEBOOK_SECRET_DEV : process.env.FACEBOOK_SECRET_PROD);
const loginStyle = fbEnv.loginStyle || process.env.FACEBOOK_LOGIN_STYLE || 'popup';

ServiceConfiguration.configurations.removeAsync({ service: 'facebook' });
if (appId && secret) {
  ServiceConfiguration.configurations.upsertAsync(
    { service: 'facebook' },
    { $set: { appId, secret, loginStyle } }
  );
} else {
  // eslint-disable-next-line no-console
  console.warn('Facebook OAuth not configured. Set Meteor.settings.facebook or FACEBOOK_APP_ID/SECRET');
}

Meteor.publish("current_user_data", function () {
  if (!this.userId) return this.ready();
  return Meteor.users.find(
    { _id: this.userId },
    { fields: { 'profile.first_name': 1, 'profile.last_name': 1, 'profile.picture': 1 } }
  );
});
