# Belka Portal

A polished, responsive, **fictional and fan-made** Belkan micronation portal inspired by the world/aesthetic of Ace Combat.

## Important
This project is **not an official Ace Combat, Belka government, financial service, bookmaker, real-estate service, or game service**. All companies, currency, properties, teams, fixtures, odds and events are fictional. Do not use copyrighted game assets unless you have permission.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

The app is a Vite + React single-page front end. `base: "./"` makes the static build suitable for GitHub Pages.

## Hero video

Place a legally usable / original video at:

`public/media/belka-hero.mp4`

The app already has `belka-fallback.svg` as the poster/fallback. Keep the video short, compressed, muted, and preferably under a few MB. The page automatically respects `prefers-reduced-motion` by hiding the video.

## GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose GitHub Actions as the source.
3. Add a workflow that runs `npm ci`, `npm run build`, and deploys `dist/`.
4. Because Vite is configured with `base: "./"`, the built assets resolve correctly from a project or user site.

GitHub Pages only hosts the front end. It does **not** provide authentication, a database, server-side transaction processing, secure secrets, or authoritative account balances.

## Backend integration

Recommended Supabase/Firebase-style services:

- Authentication: email/password, OAuth, session refresh, account deletion.
- Database: profiles, marketplace listings, property catalogue, watchlists, bets, balances, audit events.
- Authorization: row-level/security rules so users can only modify their own listings/watchlists/bets.
- Server-side balance ledger: never trust a browser-supplied balance.
- Server-side play-money bet validation and settlement.
- Input validation and rate limiting.
- Storage for listing/property images.
- Optional realtime market/sports updates.
- Admin/moderation tools.
- Privacy controls and data deletion/export.
- Server-side secrets in environment variables, never in front-end code.

### Suggested tables

`profiles`, `ledger_entries`, `market_assets`, `watchlists`, `marketplace_listings`, `properties`, `sports_teams`, `fixtures`, `bets`, `audit_events`.

For a real deployment, keep authoritative balances as a ledger/transaction system. The browser should only display values returned by the backend.

## Demo mode

This build intentionally uses local sample data and simulated account interactions. The “Demo sign in” button does not authenticate a user, and the displayed ℬ balance is not authoritative. Connect a backend before enabling persistent accounts or transactions.

## Accessibility

- Semantic sections and buttons
- Keyboard-visible focus states
- Readable contrast
- Responsive layouts
- `prefers-reduced-motion` support
- Video has a poster/fallback
- Tables are horizontally scrollable on narrow screens

## Licensing

The source code is provided as a fictional fan project. Replace sample imagery with assets you own, created yourself, or are licensed to use. Avoid extracting or redistributing copyrighted Ace Combat game assets.
