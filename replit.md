# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Mahoney Tech Solutions (`artifacts/mahoney-tech`)
- **Type**: React + Vite web app
- **Port**: 3000 (previewPath: `/`)
- **Purpose**: 5-page business website for Kylar Mahoney's IT & Cybersecurity business in Galveston, TX
- **Pages**: Home (video hero), Services, About, FAQ, Contact
- **Design**: Brutalist navy/blue, Bebas Neue + IBM Plex Sans fonts, sharp corners (radius 0)
- **Contact form**: Posts to `/api/contact` using Resend email API (requires `RESEND_API_KEY` secret)
- **Assets**: Logo (`mts_logo.png`), hero video (`galveston_beach_hero.mp4`), hero poster (`hero-poster.jpg`)
- **Key files**: `src/pages/`, `src/components/layout/`, `src/index.css`, `public/`

### API Server (`artifacts/api-server`)
- **Port**: 8080 (previewPath: `/api`)
- **Routes**: `/api/healthz`, `/api/contact` (Resend email)
- **Contact route**: `src/routes/contact.ts` — sends email via Resend to kylar@mahoneytechsolutions.com

## Important Notes
- Port 21466 is assigned to mahoney-tech but cannot be health-checked by the workflow manager; use port 3000 via artifact.toml `[services.env] PORT = "3000"`
- `RESEND_API_KEY` must be set as an environment secret for the contact form to send emails
