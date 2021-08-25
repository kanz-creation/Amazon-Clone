import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  console.log(`made request to /api/products route...`)
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

//added spacing and interesting port choice!
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
