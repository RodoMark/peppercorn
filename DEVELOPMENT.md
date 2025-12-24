# Development Setup Guide

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

## Initial Setup

### Option 1: Install Everything at Once
```bash
npm run install:all
```

### Option 2: Manual Installation
```bash
# Install root dependencies (if any)
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies
cd backend
npm install
cd ..
```

## Development Workflow

### Start Both Services
```bash
npm run dev
```
This will start:
- Frontend on http://localhost:3000
- Backend on http://localhost:3001

### Start Services Individually

**Frontend Only:**
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```

**Backend Only:**
```bash
npm run dev:backend
# or
cd backend && npm run dev
```

## Project Structure

```
peppercorn/
├── frontend/               # Nuxt 4 Application
│   ├── app/
│   │   ├── app.vue        # Root component
│   │   ├── assets/        # SCSS styles and assets
│   │   └── pages/         # Application pages (auto-routed)
│   │       ├── index.vue  # Homepage
│   │       └── demo.vue   # Component demos
│   ├── public/            # Static files
│   ├── nuxt.config.ts     # Nuxt configuration
│   ├── tailwind.config.js # Tailwind CSS config
│   └── package.json
│
├── backend/               # Express.js API
│   ├── src/
│   │   └── index.js      # Main server file
│   └── package.json
│
├── package.json          # Root package.json with scripts
├── .gitignore           # Git ignore rules
└── README.md            # Main documentation
```

## Technologies Used

### Frontend Stack
- **Nuxt 4** - Full-stack framework for Vue.js
- **Vite** - Next generation frontend tooling
- **Vue 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **SCSS** - CSS preprocessor
- **Radix Vue** - Unstyled, accessible UI components
- **TypeScript** - Type-safe JavaScript

### Backend Stack
- **Express.js** - Web application framework
- **CORS** - Cross-Origin Resource Sharing
- **Node.js** - JavaScript runtime

## Common Commands

### Frontend
```bash
cd frontend

# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run generate         # Generate static site
npm run preview          # Preview production build

# Types
npm run postinstall      # Generate types (auto-runs after install)
```

### Backend
```bash
cd backend

# Development
npm run dev              # Start with hot reload (Node.js --watch)

# Production
npm start                # Start production server
```

## Environment Variables

### Backend
Create a `.env` file in the `backend` directory:
```env
PORT=3001
```

### Frontend
Create a `.env` file in the `frontend` directory if needed:
```env
# API URL for production
NUXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```
Output will be in `frontend/.output/`

### Backend
The backend runs directly from source. For production:
```bash
cd backend
npm start
```

## Troubleshooting

### Port Already in Use
If you get a "port already in use" error:
```bash
# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001 (backend)
lsof -ti:3001 | xargs kill -9
```

### Dependencies Issues
If you have dependency issues:
```bash
# Clean install frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# Clean install backend
cd ../backend
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
If the frontend build fails:
```bash
cd frontend
rm -rf .nuxt .output node_modules/.cache
npm run build
```

## Adding New Features

### Add a New Page (Frontend)
1. Create a new `.vue` file in `frontend/app/pages/`
2. Nuxt will automatically create a route based on the filename
3. Example: `frontend/app/pages/about.vue` → `/about`

### Add a New API Endpoint (Backend)
1. Edit `backend/src/index.js`
2. Add new route handlers following the existing pattern
3. Example:
```javascript
app.get('/api/new-endpoint', (req, res) => {
  res.json({ message: 'New endpoint' });
});
```

### Use Radix Vue Components
```vue
<script setup>
import { DialogRoot, DialogTrigger } from 'radix-vue';
</script>

<template>
  <DialogRoot>
    <DialogTrigger>Open</DialogTrigger>
    <!-- Add dialog content -->
  </DialogRoot>
</template>
```

## Testing

Currently, there are no tests configured. To add testing:

### Frontend Testing
```bash
cd frontend
npm install -D @nuxt/test-utils vitest @vue/test-utils
```

### Backend Testing
```bash
cd backend
npm install -D jest supertest
```

## Deployment

### Frontend (Nuxt)
- Can be deployed to Vercel, Netlify, or any Node.js hosting
- Supports static generation for hosting on CDN
- See [Nuxt Deployment Docs](https://nuxt.com/docs/getting-started/deployment)

### Backend (Express)
- Deploy to any Node.js hosting (Railway, Render, Heroku, etc.)
- Ensure PORT environment variable is set correctly
- Consider using PM2 for process management in production

## Additional Resources

- [Nuxt 4 Documentation](https://nuxt.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix Vue Documentation](https://www.radix-vue.com/)
- [Express.js Documentation](https://expressjs.com/)
- [Vite Documentation](https://vitejs.dev/)
