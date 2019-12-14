const getCoverImage = (styleObj) => {
 
  const findPhoto = (defaultStyleId = 0) => {
    if (defaultStyle === null) {
      for (const style of styles) {
        for (const photo of style.photos) {
          if (Boolean(photo.url)) {
            result.style_id = style.style_id;
            result.url = photo.url;
            result.thumbnail = photo.thumbnail_url;
            result.originalPrice = style.original_price;
            result.salePrice = style.sale_price;
            return;
          }
        }
      }
      result.style_id = defaultStyleId;
    }
  };

  const styles = styleObj.results;
  let defaultStyle = null;
  let result = {
    product_id: styleObj.product_id,
    style_id: styles[0].style_id,
    url: null,
    thumbnail: null,
    originalPrice: styles[0].original_price,
    salePrice: styles[0].sale_price
  };


  for (const style of styles) {
    console.log(style)
    if (style['default?'] === 1) {
      defaultStyle = style;
      break;
    }
  }

  if (defaultStyle === null) {
    findPhoto();
  } else {
    for (const photo of defaultStyle.photos) {
      if (Boolean(photo.url)) {
        result.style_id = defaultStyle.style_id;
        result.url = photo.url;
        result.thumbnail = photo.thumbnail_url;
        result.originalPrice = defaultStyle.original_price;
        result.salePrice = defaultStyle.sale_price;
        break;
      }
    }
    findPhoto(defaultStyle.style_id);
  }
  console.log(result)
  return result;
};

export default getCoverImage;