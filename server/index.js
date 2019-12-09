const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname, '../dist')));
server.use(bodyParser.json());

server.listen(port, () => `Listening on port ${port}`);
