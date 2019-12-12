import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/components/App.jsx';
import AppContainer from '../client/containers/App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import OverviewContainer from '../client/containers/Overview/index.jsx';
import thunk from 'redux-thunk';
import { changeProduct } from '../client/actions/creators/changeProduct';

const mockStore = configureStore([thunk]);

describe('App Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      product: {
        info: {
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
        }
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
