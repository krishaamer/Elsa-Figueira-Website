# Meteor upgrade history

This archived application began as the production Elsa Figueira website on Meteor 1.4.1.2. The `update-deps` branch upgraded it through the Meteor 1.x and 2.x releases to Meteor 3.3.2 before the branch was merged into the Next.js monorepo.

## Final archived state

- Meteor 3.3.2
- Node.js 20 or newer
- Blaze templates
- `ostrio:flow-router-extra` with `pwix:blaze-layout`
- Semantic UI 2.5.0 from npm
- JSON-backed English, Estonian, and Portuguese localization
- Facebook OAuth configuration supplied through settings or environment variables

## Major upgrade changes

- Replaced the original Iron Router integration with FlowRouter and BlazeLayout.
- Added explicit client and server entry points for Meteor 3.
- Replaced the legacy `tap:i18n` runtime integration with a small reactive translation helper backed by the existing locale JSON files.
- Replaced the old collection calls used for Facebook configuration with Meteor 3 asynchronous APIs.
- Removed hardcoded Facebook credentials from the current source tree and added `settings.example.json`.
- Replaced Meteor Semantic UI packages with the npm `semantic-ui-css` package and restored the required icon fonts.
- Removed obsolete packages and updated Meteor core package versions.

The individual migration steps and intermediate implementations remain available in Git history on the merged `update-deps` branch.
