// import Redux from 'redux';
import { SET_PRODUCT_IMAGE_INFO } from '../actions/index';

export default (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return { ...state, ...action.info };
    case SET_PRODUCT_IMAGE_INFO:
      return { ...state, imageInfo: action.imageInfo };
    default:
      return state;
  }
};
