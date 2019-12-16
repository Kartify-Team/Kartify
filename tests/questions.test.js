import React from 'react';
import { shallow, mount } from 'enzyme';
import QuestionListContainer from '../client/containers/Questions/QuestionList';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { questionData } from "./testData";

const mockStore = configureStore([thunk]);

let store = mockStore();
describe('App Component', () => {
  beforeEach(() => {
    store = mockStore({ questions: questionData });
  });

  it('passes question data from store to QuestionList props', () => {
    const wrapper = shallow(<QuestionListContainer store={store} />);
    expect(wrapper.find('QuestionList').prop('questions').length).toEqual(4);
  });
});
