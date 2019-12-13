import {
  CHANGE_PRODUCT,
  SET_RATINGS,
  SET_CHARACTERISTICS
} from '../client/actions';
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

  it('handles SET_CHARACTERISTICS actions', () => {
    const action = {
      type: SET_CHARACTERISTICS,
      characteristics: {
        Fit: {
          id: 1,
          value: '3.8571'
        },
        Length: {
          id: 2,
          value: '3.7143'
        },
        Comfort: {
          id: 3,
          value: '4.1429'
        },
        Quality: {
          id: 4,
          value: '3.7143'
        }
      }
    };

    const { characteristics } = ratingsReducer({}, action);
    expect(characteristics.Quality.id).toEqual(4);
    expect(characteristics.Quality.value).toEqual('3.7143');
  });
});
