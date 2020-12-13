import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, world!'));

app.listen(port, () => console.log('API running on port 3000.'));
