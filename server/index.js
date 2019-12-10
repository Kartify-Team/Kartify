require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();
const port = process.env.PORT;

server.use(express.static(path.join(__dirname, '../dist')));
server.use(bodyParser.json());

server.listen(port, () => console.log(`Listening on port ${port}`));