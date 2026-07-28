# UCT Student Hub — Full App

This is the full modular React + TypeScript version of the Student Hub. It replaces the old four-file static PWA with a proper source-code project.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload the entire project folder, preserving all folders.
3. Import the repository into Vercel.
4. Vercel detects Vite automatically. Build command: `npm run build`; output folder: `dist`.

## Data migration

On first launch, the app checks for Phase 8–10 localStorage data and converts the main timetable, assessment, study, marks and budget records into the new structure. Export a backup from the old app before changing deployments.

## Main folders

- `src/components` — navigation and reusable UI
- `src/pages` — feature screens
- `src/lib` — types, sample data and persistent store
- `public` — manifest and service worker
