import { CHANGE_PRODUCT } from '../client/actions';
import productReducer from '../client/reducers/product';

describe('product reducer', () => {
  it('handles CHANGE_PRODUCT actions', () => {
    const action = {
      type: CHANGE_PRODUCT,
      info: {
        id: 2,
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description:
          'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140',
        features: [
          {
            feature: 'Buttons',
            value: 'Brass'
          }
        ]
      }
    };

    const product = productReducer(null, action);
    expect(product.id).toEqual(2);
  });
});
