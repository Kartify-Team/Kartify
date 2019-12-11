import React from 'react';
import { shallow, mount } from 'enzyme';
import QuestionsContainer from '../client/containers/Questions';
import { Provider } from 'react-redux';
import store from '../client/store';

describe('Questions Component', () => {
  it('renders', () => {
    shallow(<Provider store={store}><QuestionsContainer /></Provider>);
  });

  it('renders all child components', () => {
    mount(<Provider store={store}><QuestionsContainer /></Provider>);
  });
});