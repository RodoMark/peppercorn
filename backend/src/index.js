import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Peppercorn backend is running',
    timestamp: new Date().toISOString()
  });
});

// Example API endpoints
app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item 1', description: 'First item' },
    { id: 2, name: 'Item 2', description: 'Second item' },
    { id: 3, name: 'Item 3', description: 'Third item' }
  ]);
});

app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json({ 
    id, 
    name: `Item ${id}`, 
    description: `Details for item ${id}` 
  });
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  res.status(201).json({ 
    id: Date.now(), 
    ...newItem,
    createdAt: new Date().toISOString()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
