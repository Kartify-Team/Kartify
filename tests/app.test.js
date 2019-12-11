import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/components/App.jsx';
import { Provider } from 'react-redux';
import store from '../client/store';

describe('App Component', () => {
  it('renders', () => {
    shallow(<Provider store={store}><App /></Provider>);
  });

  it('renders all child components', () => {
    mount(<Provider store={store}><App /></Provider>);
  });
});
