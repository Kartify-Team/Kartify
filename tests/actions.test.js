import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeProduct } from '../client/actions/creators/changeProduct';
import 'regenerator-runtime';

let mockStore = configureStore([thunk]);
let store = mockStore();

describe('changeProduct action creator', () => {
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
