import React from 'react';
import { shallow, mount } from 'enzyme';
import QuestionsContainer from '../client/containers/Questions/';
import QuestionListContainer from '../client/containers/Questions/QuestionList';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { questionData, productData } from "./testData";

const mockStore = configureStore([thunk]);

let store = mockStore();
describe('Questions Component', () => {
  beforeEach(() => {
    store = mockStore({
      questions: questionData,
      product: productData,
      query: "Size"
    });
  });
  it('passes question data from store to Questions props', () => {
    const wrapper = shallow(<QuestionsContainer store={store} />);
    expect(wrapper.find('Questions').prop('questions').length).toEqual(4);
  });
  it('passes product data from store to Questions props', () => {
    const wrapper = shallow(<QuestionsContainer store={store} />);
    expect(wrapper.find('Questions').prop('product').id).toEqual(1);
  });
});
describe('QuestionList Component', () => {

  it('passes question data from store to QuestionList props', () => {
    const wrapper = shallow(<QuestionListContainer store={store} />);
    expect(wrapper.find('QuestionList').prop('questions').length).toEqual(4);
  });
  it('passes product data from store to QuestionList props', () => {
    const wrapper = shallow(<QuestionListContainer store={store} />);
    expect(wrapper.find('QuestionList').prop('product').id).toEqual(1);
  });
  // it('passes query data from store to QuestionList props', () => {
  //   const wrapper = shallow(<QuestionListContainer store={store} />);
  //   expect(wrapper.find('QuestionList').prop('query')).toEqual("Size");
  // });
});