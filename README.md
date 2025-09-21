# Elsa-Figueira-Website
Website for the Elsa Figueira campaign against domestic violence.

Running locally
- Install Meteor 3+: `curl https://install.meteor.com/ | sh` (if not installed)
- Copy settings and fill your values: `cp settings.example.json settings.development.json`
- Start the app with settings: `meteor run --settings settings.development.json`

Facebook OAuth configuration
- The server reads from `Meteor.settings.facebook` or environment variables:
  - Settings: `facebook.development|production.appId`, `secret`, optional `loginStyle`
  - Env vars: `FACEBOOK_APP_ID`, `FACEBOOK_SECRET`, optional `FACEBOOK_LOGIN_STYLE`
  - You can also set `FACEBOOK_APP_ID_DEV/PROD` and `FACEBOOK_SECRET_DEV/PROD`
