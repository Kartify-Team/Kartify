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
