if (!process.env.PORT) {
  require('dotenv').config();
}
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();
const router = require('./routes.js');
const port = process.env.PORT;

server.use(express.static(path.join(__dirname, '../dist')));
server.use(bodyParser.json());
server.use(router);

server.listen(port, () => console.log(`Listening on port ${port}`));
