import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeProduct } from '../client/actions/creators/changeProduct';
import { setRatings } from '../client/actions/creators/setRatings';
import { addQuestionList } from '../client/actions/creators/addQuestionList';
import { setCharacteristics } from '../client/actions/creators/setCharacteristics';
import { searchQuestions } from "../client/actions/creators/searchQuestions"
import 'regenerator-runtime';
import { SEARCH_QUESTIONS } from '../client/actions';

let mockStore = configureStore([thunk]);
let store;

describe('changeProduct action creator', () => {
  let mockStore = configureStore([thunk]);
  let store = mockStore();

  it('dispatches to store', () => {
    expect.assertions(1);
    return store
      .dispatch(changeProduct(1))
      .then(() => {
        return expect(store.getActions().length).toEqual(1);
      })
      .catch(e => console.error(e));
  });
});

describe('setRatings action creator', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  it('dispatches to store', () => {
    expect.assertions(1);
    return store
      .dispatch(setRatings(1))
      .then(() => {
        return expect(store.getActions().length).toEqual(1);
      })
      .catch(e => console.error(e));
  });
});

describe('setCharacteristics action creator', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  it('dispatches to store', () => {
    expect.assertions(1);
    return store
      .dispatch(setCharacteristics(1))
      .then(() => {
        return expect(store.getActions().length).toEqual(1);
      })
      .catch(e => console.error(e));
  });
});

describe('addQuestionList action creator', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });
  it('dispatches to store', () => {
    expect.assertions(1);
    return store
      .dispatch(addQuestionList(1))
      .then(() => {
        return expect(store.getActions().length).toEqual(1);
      })
      .catch(e => console.error(e));
  });
});

describe('searchQuestions action creator', () => {
  it('dispatches to store', () => {
    const query = 'Comfort'
    const expectedAction = {
      type: SEARCH_QUESTIONS,
      query
    }
    expect(searchQuestions(query)).toEqual(expectedAction)
  });
});

