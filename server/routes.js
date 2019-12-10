const axios = require('axios');
const router = require('express').Router();

router.get('/products/list', (req, res) => {
  const { page, count } = req.query;
  return axios
    .get('http://3.134.102.30/products/list', {
      params: { page, count }
    })
    .then(response => res.send(response.data))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
