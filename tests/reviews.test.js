import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ReviewsContainer from '../client/containers/Reviews/index';
import ReviewStats from '../client/components/Reviews/ReviewStats';

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

describe('ReviewStats component', () => {
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
    expect(wrapper.find('ReviewStats').prop('productId')).toEqual(1);
  });
});
