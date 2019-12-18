import { changeMyOutfit } from '../creators/changeMyOutfit.js';
import { getProductsInfo } from '../../utils/index';

const getMyOutfit = () => {
  return dispatch => {
    let oldOutfit = localStorage.getItem('outfit');
    if (oldOutfit === null) {
      dispatch(changeMyOutfit([null]));
    } else {
      let parsedOutfit = JSON.parse(oldOutfit);
      getProductsInfo(parsedOutfit)
        .then(products => {
          let newOutfit = [null, ...products]
          dispatch(changeMyOutfit(newOutfit));
        });
    }
  };
};

export default getMyOutfit;