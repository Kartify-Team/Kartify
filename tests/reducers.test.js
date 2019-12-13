import { CHANGE_PRODUCT, SET_RATINGS } from '../client/actions';
import productReducer from '../client/reducers/product';
import ratingsReducer from '../client/reducers/ratings';

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

describe('ratings reducer', () => {
  it('handles SET_RATINGS actions', () => {
    const action = {
      type: SET_RATINGS,
      ratings: {
        1: 1,
        3: 1,
        4: 1,
        5: 4
      }
    };

    const { ratings } = ratingsReducer({}, action);
    expect(ratings[1]).toEqual(1);
    expect(ratings[3]).toEqual(1);
    expect(ratings[5]).toEqual(4);
  });
});
