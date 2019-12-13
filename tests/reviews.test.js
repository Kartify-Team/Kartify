import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReviewsContainer from '../client/containers/Reviews/index';
import { getTotalRatings } from '../client/utils';

const mockStore = configureStore([thunk]);
let store = mockStore();

describe('Reviews Component', () => {
  it('renders', () => {
    shallow(<ReviewsContainer store={store} />);
  });

  it('renders all child components', () => {
    mount(<ReviewsContainer store={store} />);
  });
});

xdescribe('ReviewStats component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      product: {
        id: 1,
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
      },
      otherItems: {},
      questionsReducer: {}
    });
  });

  it('gets product id from store via props', () => {
    const wrapper = mount(<ReviewsContainer store={store} />);
    expect(wrapper.find('RatingBreakdown').prop('productId')).toEqual(1);
  });
});

describe('getTotalRatings helper', () => {
  const ratings = {
    '1': 1,
    '3': 1,
    '4': 1,
    '5': 4
  };

  it('gets the correct number of total ratings', () => {
    expect(getTotalRatings(ratings)).toEqual(7);
  });
});
