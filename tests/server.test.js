import axios from 'axios';
import 'regenerator-runtime/runtime';

describe('it successfully interfaces with the api', () => {
  describe('it handles requests to the /products/list endpoint correctly', () => {
    it('returns a correctly formatted list of products when no query params are supplied', async () => {
      const responseData = await axios
        .get('http://localhost:3000/products/list')
        .then(response => response.data);

      expect(responseData.length).toBe(5);
      expect(responseData[0].id).toBe(1);
    });
    it('returns a correctly formatted list of products when query params are supplied', async () => {
      const responseData = await axios
        .get('http://localhost:3000/products/list', {
          params: { page: 2, count: 10 }
        })
        .then(response => response.data);

      expect(responseData.length).toBe(10);
      expect(responseData[0].id).toBe(11);
    });
  });
});
