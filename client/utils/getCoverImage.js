const getCoverImage = (styleObj) => {
 
  const findPhoto = (defaultStyleId = 0) => {
    if (defaultStyle === null) {
      for (const style of styles) {
        for (const photo of style.photos) {
          if (Boolean(photo.url)) {
            result.style_id = style.style_id;
            result.url = photo.url;
            result.thumbnail = photo.thumbnail_url;
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
    style_id: null,
    url: null,
    thumbnail: null
  }


  for (const style of styles) {
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
        break;
      }
    }
    findPhoto(defaultStyle.style_id);
  }

  return result;
};

export default getCoverImage;