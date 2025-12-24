# Backend API

Express.js backend API for Peppercorn.

## Getting Started

### Install dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```
Server runs on http://localhost:3001 with hot reload enabled.

### Production
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status and timestamp

### Items
- **GET** `/api/items` - Get all items
- **GET** `/api/items/:id` - Get item by ID  
- **POST** `/api/items` - Create new item

## Environment Variables

- `PORT` - Server port (default: 3001)

## Project Structure

```
backend/
├── src/
│   └── index.js    # Main server file
├── package.json
└── README.md
```
