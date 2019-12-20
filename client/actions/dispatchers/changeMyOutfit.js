import { changeMyOutfit } from '../creators/changeMyOutfit.js';

export const modifyMyOutfit = (product, outfit, type) => {
  return dispatch => {
    if (type === 'remove') {
      for (let i = 0; i < outfit.length; i++) {
        if (outfit[i] !== null && outfit[i].id === product.id) {
          outfit.splice(i, 1);
          let newOutfit = outfit.slice();
          dispatch(changeMyOutfit(newOutfit));
          break;
        }
      }
    } else if (type === 'add') {
      for (let ele of outfit) {
        if (ele === null) {
          continue;
        }
        if (ele.id === product.id) {
          return;
        }
      }
      outfit.push(product);
      let newOutfit = outfit.slice();
      dispatch(changeMyOutfit(newOutfit));
    }
  }
};