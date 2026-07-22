# Archived Meteor implementation

This is the final Meteor version of the Elsa Figueira website. It was upgraded from the original Meteor 1 application to Meteor 3.3.2 on the `update-deps` branch, then consolidated into the monorepo archive.

## Archive status

- Read-only historical reference
- Not used by [elsafigueira.com](https://www.elsafigueira.com/)
- Not included in the active pnpm workspace
- Must not be deployed without a fresh security and dependency review

The production implementation is `../../elsa-next/`.

## Run locally for historical verification

Requirements:

- Node.js 20 or newer
- Meteor 3

```sh
npm ci
cp settings.example.json settings.development.json
meteor run --settings settings.development.json
```

Facebook OAuth values must be supplied through the untracked settings file or environment variables. Never commit real credentials.

See `UPGRADE_HISTORY.md` for the preserved upgrade summary.
