# 🌶️ Peppercorn

A lightweight rules & conditions engine built with modern web technologies.

## 🚀 Technology Stack

### Frontend
- **Nuxt 4** - The Intuitive Vue Framework with Vite
- **Vue 3** - Progressive JavaScript Framework
- **Vite** - Next Generation Frontend Tooling
- **Tailwind CSS** - Utility-first CSS Framework
- **SCSS** - CSS Preprocessor for advanced styling
- **Radix Vue** - Unstyled, accessible UI components

### Backend
- **Express.js** - Fast, minimalist web framework for Node.js
- **CORS** - Cross-Origin Resource Sharing enabled

## 📁 Project Structure

```
peppercorn/
├── frontend/          # Nuxt 4 application
│   ├── app/          # App directory
│   ├── assets/       # Assets (SCSS, images, etc.)
│   ├── components/   # Vue components
│   ├── pages/        # Application pages (auto-routing)
│   ├── public/       # Static files
│   └── nuxt.config.ts
├── backend/          # Express.js API server
│   ├── src/
│   │   └── index.js  # Main server file
│   └── package.json
├── package.json      # Root package.json with scripts
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 20 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RodoMark/peppercorn.git
cd peppercorn
```

2. Install all dependencies:
```bash
npm run install:all
```

Or install manually:
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && npm install
```

### Development

#### Run both frontend and backend:
```bash
npm run dev
```

#### Run frontend only:
```bash
npm run dev:frontend
# or
cd frontend && npm run dev
```
Frontend will be available at: `http://localhost:3000`

#### Run backend only:
```bash
npm run dev:backend
# or
cd backend && npm run dev
```
Backend API will be available at: `http://localhost:3001`

### Building for Production

#### Build frontend:
```bash
npm run build
# or
cd frontend && npm run build
```

#### Start backend in production:
```bash
npm run start:backend
# or
cd backend && npm start
```

## 🎨 Features

### Frontend Features
- ✅ Nuxt 4 with Vite for fast development
- ✅ Tailwind CSS for utility-first styling
- ✅ SCSS support for advanced CSS
- ✅ Radix Vue components for accessible UI
- ✅ Auto-routing with pages directory
- ✅ TypeScript support
- ✅ Hot Module Replacement (HMR)

### Backend Features
- ✅ RESTful API with Express.js
- ✅ CORS enabled for frontend communication
- ✅ Example CRUD endpoints
- ✅ Error handling middleware
- ✅ Hot reload in development mode

## 📚 API Endpoints

### Backend API (http://localhost:3001)

- `GET /api/health` - Health check endpoint
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Create new item

## 🎯 Demo Pages

- `/` - Home page with project overview
- `/demo` - Interactive demo showcasing:
  - Radix Vue Dialog component
  - Radix Vue Popover component
  - Radix Vue Tooltip component
  - Backend API integration

## 🔧 Configuration

### Frontend Configuration
- `frontend/nuxt.config.ts` - Nuxt configuration
- `frontend/tailwind.config.js` - Tailwind CSS configuration
- `frontend/assets/styles/main.scss` - Global SCSS styles

### Backend Configuration
- `backend/src/index.js` - Server configuration
- Port: 3001 (configurable via PORT environment variable)

## 📝 Development Tips

### Adding New Pages
Create a new `.vue` file in `frontend/pages/` - Nuxt will automatically create routes.

### Using Radix Vue Components
Import components from `radix-vue`:
```vue
import { DialogRoot, DialogTrigger } from 'radix-vue';
```

### Using Tailwind CSS
Use utility classes directly in your templates:
```vue
<div class="flex items-center justify-center p-4 bg-blue-500">
  ...
</div>
```

### Using SCSS
Add `lang="scss"` to style blocks:
```vue
<style scoped lang="scss">
$primary: #3b82f6;

.my-class {
  color: $primary;
}
</style>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Nuxt 4 Documentation](https://nuxt.com/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix Vue Documentation](https://www.radix-vue.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Express.js Documentation](https://expressjs.com/)

