require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const server = express();
const root = process.env.ROOT;
const port = process.env.PORT;

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});
server.use(compression());
server.use(express.static(path.join(__dirname, '../dist')));

server.use(require('express-form-data').parse());

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.post('/img', (req, res) => {
  Promise.all(
    Object.values(req.files).map(image =>
      cloudinary.uploader.upload(image.path)
    )
  )
    .then(cloudResponse => res.send(cloudResponse.map(image => image.url)))
    .catch(err => res.status(500).send(err));
});

server.listen(port, () =>
  console.log(`Server started! ${root}:${port}/products/1`)
);
