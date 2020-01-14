// require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const server = express();
const port = process.env.PORT;
var cors = require('cors')

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});
server.use(compression());
server.use(cors())
server.use(express.static(path.join(__dirname, '../dist')));

server.use(require('express-form-data').parse());

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.get('/env', (req, res) =>
  res.send({
    product: process.env.PRODUCT_SERVER,
    reviews: process.env.REVIEWS_SERVER,
    questions: process.env.QUESTIONS_SERVER
  })

)

server.post('/img', (req, res) => {
  Promise.all(
    Object.values(req.files).map(image =>
      cloudinary.uploader.upload(image.path)
    )
  )
    .then(cloudResponse => res.send(cloudResponse.map(image => image.url)))
    .catch(err => res.status(500).send(err));
});

const startMessage = process.env.ENVIRONMENT === 'production' ?
  `Server started on Port ${port}! /products/1` :
  `Server started! http://localhost:${port}/products/1
  ${process.env.PRODUCT_SERVER}`;
server.listen(port, () =>
  console.log(startMessage)
);
