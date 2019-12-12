import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeProduct } from '../client/actions/creators/changeProduct';
import { setRatings } from '../client/actions/creators/setRatings';
import 'regenerator-runtime';

let mockStore = configureStore([thunk]);
let store;

describe('changeProduct action creator', () => {
  beforeEach(() => {
    store = mockStore();
  });

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
