// Interact with local storage

export const addOutfitProduct = (id) => {
  let outfit = JSON.parse(localStorage.getItem('outfit') || '[]');
  for (let ele of outfit) {
    if (ele === id) {
      return;
    }
  }
  outfit.unshift(id);
  localStorage.setItem('outfit', JSON.stringify(outfit));
};

export const saveOutfit = (id) => {
  return dispatch => {
    let oldOutfit = localStorage.getItem('outfit');
    if (oldOutfit === null) {
      let newOutfit = [id];
      localStorage.setItem('outfit', JSON.stringify(newOutfit));
    } else {
      let parsedOutfit = JSON.parse(oldOutfit);
      let newOutfit = parsedOutfit.slice();
      newOutfit.push(id);
      localStorage.setItem('outfit', JSON.stringify(newOutfit));
    }
  };
  // export const removeOutfitProduct = (id) => {
  //   let outfit = JSON.parse(localStorage.getItem('outfit') || '[]');
  //   for (let i = 0; i < outfit.length; i++) {
  //     if (outfit[i] === id) {
  //       outfit.splice(i, 1);
  //     }
  //   }
  //   localStorage.setItem('outfit', JSON.stringify(outfit));
  // };