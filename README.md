# Elsa Figueira Website

Monorepo for [elsafigueira.com](https://www.elsafigueira.com/), the Elsa Figueira campaign against domestic violence.

## Repository layout

- `elsa-next/` — active Next.js production website, deployed on Vercel.
- `archive/elsa-meteor/` — archived Meteor 3.3.2 implementation. The original Meteor app and its `update-deps` upgrade history have been consolidated here.
- `docs/` — historical press and reference material.

The Meteor application is retained for historical reference only. It is not the production application and is excluded from the active pnpm workspace.

## Active Next.js app

Requirements:

- Node.js 20 or newer
- pnpm 10.x

From the repository root:

```sh
corepack enable
pnpm install
pnpm dev
```

Other commands:

```sh
pnpm build
pnpm start
pnpm lint
```

For Vercel, keep the project root directory set to `elsa-next`.

## Archived Meteor app

The archive can still be run for historical verification if Meteor is installed:

```sh
npm --prefix archive/elsa-meteor ci
cp archive/elsa-meteor/settings.example.json archive/elsa-meteor/settings.development.json
npm --prefix archive/elsa-meteor run dev -- --settings settings.development.json
```

See `archive/elsa-meteor/README.md` and `archive/elsa-meteor/UPGRADE_HISTORY.md` for details. Do not deploy the archived application or commit populated settings files.
