import axios from 'axios';
import React, { useState } from 'react';
import ThumbnailGallery from '../ThumbnailGallery';

const ImageUpload = ({ updatePhotos }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');
  const uploadImage = event => {
    const files = Array.from(event.target.files);
    if (!files) {
      setError('Please select at least 1 image.');
    } else if (files.length > 5) {
      setError('Please choose only 5 images!');
    } else {
      const formData = new FormData();
      files.forEach((file, i) => {
        formData.append(i, file);
      });
      axios
        .post('/img', formData)
        .then(res => {
          updatePhotos(res.data);
          setImagePreviews(res.data);
          setError('');
        })
        .catch(() => setError('An error occurred. Please try again.'));
    }
  };

  return (
    <>
      <label htmlFor="images">
        Please upload up to 5 images of your product
      </label>
      <input
        id="file"
        name="file"
        type="file"
        onChange={uploadImage}
        multiple
      />
      <ThumbnailGallery imageURLs={imagePreviews} />
      {error !== '' ? <div className="form-error">{error}</div> : <></>}
    </>
  );
};

export default ImageUpload;
