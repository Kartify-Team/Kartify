// import Redux from 'redux';
import { SET_PRODUCT_IMAGE_INFO, SET_PRODUCT_STYLES } from '../actions/index';

export default (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return { ...state, ...action.info };
    case SET_PRODUCT_IMAGE_INFO:
      return { ...state, imageInfo: action.imageInfo };
    case SET_PRODUCT_STYLES:
      return { ...state, styles: action.productStyles };
    default:
      return state;
  }
};
