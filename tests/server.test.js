import axios from 'axios';
import 'regenerator-runtime/runtime';

describe('it successfully interfaces with the api', () => {
  it('returns a correctly formatted list of products', async () => {
    const responseData = await axios
      .get('http://localhost:3000/products/list')
      .then(response => response.data);

    expect(responseData.length).toBe(5);
    expect(responseData[0].id).toBe(1);
  });
});
