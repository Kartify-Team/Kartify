// Interact with local storage

export const addOutfitProduct = (id) => {
  let outfit = JSON.parse(localStorage.getItem('outfit') || '[]');
  for (let ele of outfit) {
    if (ele === id) {
      return;
    }
  }
  outfit.push(id);
  localStorage.setItem('outfit', JSON.stringify(outfit));
};

export const removeOutfitProduct = (id) => {
  let outfit = JSON.parse(localStorage.getItem('outfit') || '[]');
  for (let i = 0; i < outfit.length; i++) {
    if (outfit[i] === id) {
      outfit.splice(i, 1);
    }
  }
  localStorage.setItem('outfit', JSON.stringify(outfit));
};