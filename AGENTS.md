# AGENTS.md

## Repository Structure

- **frontend/** - Angular 21 SPA (npm, Vitest)
- **backend/** - .NET 10 Web API

## Commands

```bash
# Frontend (works from repo root via frontend/ prefix if using npm workspaces)
cd frontend
npm start         # dev server on http://localhost:4200
npm test          # Vitest
npm run build     # dist/

# Backend
cd backend
dotnet run        # runs on http://localhost:5000
```

## Testing

- Frontend uses **Vitest** (not Karma/Jasmine)
- Run: `ng test` or `cd frontend && npm test`

## Deployment

Both services deploy via GitHub Container Registry (ghcr.io). See `.github/workflows/deploy.yml`.