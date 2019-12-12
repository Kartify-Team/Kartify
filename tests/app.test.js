import React from 'react';
import { shallow, mount } from 'enzyme';
import AppContainer from '../client/containers/App';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

let store = mockStore();
describe('App Component', () => {
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

  it('passes productInfo from store to App props', () => {
    const wrapper = shallow(<AppContainer store={store} />);
    expect(wrapper.find('App').prop('productInfo').id).toEqual(1);
  });
});
