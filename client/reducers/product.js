import Redux from 'redux';

export default (state = { productId: null }, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return { ...state, info: action.info };
    default:
      return state;
  }
};
