require('dotenv').config();
const express = require('express');
const path = require('path');
const server = express();
const root = 'http://127.0.0.1'
const port = process.env.PORT;

server.use(express.static(path.join(__dirname, '../dist')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.listen(port, () => console.log(`Server started! ${root}:${port}/products/1`));
