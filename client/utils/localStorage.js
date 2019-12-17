// Interact with local storage

export const getOutfits = () => {
  let myOutfit = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = i.toString();
    let outfit = JSON.parse(localStorage.getItem(key));
    myOutfit.push(outfit);
  }
  return myOutfit;
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
  }
};