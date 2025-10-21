# Elsa Monorepo

This repository contains two implementations of the Elsa Figueira website:

- `elsa-meteor` — the original Meteor (Blaze/Iron Router) app
- `elsa-next` — a Next.js port using pages router

## Getting Started

Prerequisites:
- pnpm 10.x (`corepack enable && corepack prepare pnpm@latest --activate`)
- Meteor (for `elsa-meteor`): `curl https://install.meteor.com/ | sh`

Install workspace deps (Next.js app):

```
pnpm install
```

Run Next.js (port 3000):

```
pnpm dev
```

Run Meteor (port 3000):

```
pnpm dev:meteor
```

Build Next.js:

```
pnpm build
```

## Structure

- `elsa-meteor/` — Meteor sources (`.meteor`, `client`, `server`, `public`, `lang`)
- `elsa-next/` — Next.js app (assets copied to `elsa-next/public`, i18n to `elsa-next/locales`)

