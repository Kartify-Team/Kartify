// import Redux from 'redux';

const otherItemsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_RELATED_PRODUCTS':
    return Object.assign({}, state, {relatedProducts: action.products});
  case 'CHANGE_RELATED_PRODUCTS_STYLES':
    return Object.assign({}, state, {relatedProductsStyles: action.products});
  case 'CHANGE_RELATED_PRODUCTS_RATINGS':
    return Object.assign({}, state, {relatedProductsRatings: action.products});
  case 'CHANGE_MY_OUTFIT':
    return Object.assign({}, state, { myOutfit: action.products });
  case 'CHANGE_MY_OUTFIT_STYLES':
    return Object.assign({}, state, { myOutfitStyles: action.products });
  case 'CHANGE_MY_OUTFIT_RATINGS': 
    return Object.assign({}, state, { myOutfitRatings: action.products });
  default:
    return state;
  }
};

export default otherItemsReducer;