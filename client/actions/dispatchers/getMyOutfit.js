import { changeMyOutfit } from '../creators/changeMyOutfit.js';
import { getProductsInfo } from '../../utils/index';

const getMyOutfit = () => {
  return dispatch => {
    let oldOutfit = localStorage.getItem('outfit');
    if (oldOutfit === null) {
      return;
    } else {
      let newOutfit = JSON.parse(oldOutfit);
      getProductsInfo(newOutfit)
        .then(products => {
          dispatch(changeMyOutfit(products));
        });
    }

  };
};

export default getMyOutfit;