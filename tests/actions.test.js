import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeProduct } from '../client/actions/creators/changeProduct';
import { addQuestionList } from '../client/actions/creators/addQuestionList'
import 'regenerator-runtime';

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

describe('addQuestionList action creator', () => {
  let mockStore = configureStore([thunk]);
  let store = mockStore();
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
