// import Redux from 'redux';

const otherItemsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_RELATED_PRODUCTS':
    return {...state, relatedProducts: action.products};
  case 'CHANGE_MY_OUTFIT':
    return {...state, myOutfit: action.products};
  default:
    return state;
  }
};

export default otherItemsReducer;