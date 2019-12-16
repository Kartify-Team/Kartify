export const getDefaultStyle = stylesObj => {
  // console.log(stylesObj);
  const styles = stylesObj.results;

  if (styles !== undefined) {
    for (const style of styles) {
      if (style['default?'] === '1' || style['default?'] === 1) {
        return style;
      }
    }

    return styles[0];
  } else {
    return null;
  }
};

export const checkInventory = skus => {
  for (const size in skus) {
    if (skus[size] > 0) {
      return true;
    }
  }
  return false;
};

export const getInventory = skus => {
  const availableSizes = [];
  for (const size in skus) {
    if (skus[size] > 0) {
      availableSizes.push([size, skus[size]]);
    }
  }
  return availableSizes;
};
