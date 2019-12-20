import React, { useState } from 'react';
import { useFormik, useEffect } from 'formik';
import StarsSelector from './StarsSelector';
import CharacteristicForm from './CharacteristicForm';
import { isValidEmail } from '../../../utils';
import { postReview } from '../../../greenfieldAPI/reviews';
import ImageUpload from '../../Questions/AddModal/ImageUpload';

const AddReviewForm = ({ characteristics, id, setReviewList, sort, close }) => {
  const [rating, setRating] = useState(0);
  const [size, setSize] = useState();
  const [width, setWidth] = useState();
  const [comfort, setComfort] = useState();
  const [quality, setQuality] = useState();
  const [length, setLength] = useState();
  const [fit, setFit] = useState();
  const [photos, setPhotos] = useState([]);
  const [errorsOn, setErrorsOn] = useState(false);

  const formik = useFormik({
    initialValues: {
      recommendation: '',
      summary: '',
      body: '',
      nickname: '',
      email: ''
    },

    onSubmit: values => {
      const characteristicsObj = {};
      if (size) {
        characteristicsObj[characteristics['Size'].id] = size;
      }

      if (width) {
        characteristicsObj[characteristics['Width'].id] = width;
      }

      if (comfort) {
        characteristicsObj[characteristics['Comfort'].id] = comfort;
      }

      if (quality) {
        characteristicsObj[characteristics['Quality'].id] = quality;
      }

      if (length) {
        characteristicsObj[characteristics['Length'].id] = length;
      }

      if (fit) {
        characteristicsObj[characteristics['Fit'].id] = fit;
      }

      const doesRecommend = values.recommendation === 'yes' ? true : false;

      postReview(
        id,
        rating,
        values.summary,
        values.body,
        doesRecommend,
        values.nickname,
        values.email,
        characteristicsObj,
        photos
      ).then(() => {
        setReviewList(id, 1, sort);
        close();
      });
    },

    validate: values => {
      const errors = {};
      if (!rating) {
        errors.rating = 'Required';
      }
      if (!values.recommendation) {
        errors.recommendation = 'Required';
      }
      if (!values.body) {
        errors.body = 'Required';
      }
      if (values.body.length > 1000) {
        errors.body =
          'Max characters reached. Maximum allowed characters is 1000';
      }
      if (values.body.length < 50) {
        errors.body = 'Minimum of 50 characters required';
      }
      if (values.summary.length > 60) {
        errors.summary =
          'Max characters reached. Maximum allowed characters is 60';
      }
      if (!isValidEmail(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    }
  });

  formik.validateOnBlur = false;
  formik.validateOnChange = false;

  return (
    <form id="add-review-form" onSubmit={formik.handleSubmit}>
      <br />
      <label htmlFor="rating">Overall Rating</label>
      <StarsSelector setRating={setRating} />
      <label htmlFor="recommendation">Do you recommend this product?</label>
      <div id="recommendation-container-row">
        <div className="radio-and-label">
          Yes &nbsp;
          <input
            type="radio"
            name="recommendation"
            value="yes"
            checked={formik.values.recommendation === 'yes'}
            onClick={formik.handleChange}
          />
        </div>
        <div className="radio-and-label">
          No &nbsp;
          <input
            type="radio"
            name="recommendation"
            value="no"
            checked={formik.values.recommendation === 'no'}
            onClick={formik.handleChange}
          />
        </div>
        <br />
      </div>
      <label htmlFor="characteristics">Characteristics</label>
      {Object.keys(characteristics).map(characteristic => {
        let handler;
        if (characteristic === 'Size') handler = setSize;
        if (characteristic === 'Width') handler = setWidth;
        if (characteristic === 'Comfort') handler = setComfort;
        if (characteristic === 'Quality') handler = setQuality;
        if (characteristic === 'Length') handler = setLength;
        if (characteristic === 'Fit') handler = setFit;
        return (
          <CharacteristicForm
            name={characteristic.toLowerCase()}
            handler={handler}
            id={characteristics[characteristic].id}
          />
        );
      })}
      <label htmlFor="summary">Summary</label>
      <input
        type="text"
        name="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
      />
      <label htmlFor="body">Review Body</label>
      <textarea
        name="body"
        onChange={formik.handleChange}
        value={formik.values.body}
      />
      <br />
      <ImageUpload updatePhotos={setPhotos} />
      <label htmlFor="nickname">What is your nickname?</label>
      <input
        type="text"
        name="nickname"
        onChange={formik.handleChange}
        value={formik.values.nickname}
        placeholder="Example: jackson11!"
      />

      <label htmlFor="email">Your email</label>
      <input
        type="text"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <p>For privacy reasons, do not use your full name or email address</p>
      <button
        id="submit"
        type="submit"
        className="action-button"
        onClick={() => setErrorsOn(true)}
      >
        Submit
      </button>
      <br />
      {errorsOn
        ? Object.keys(formik.errors).map(error => (
            <div className="error">
              {error}: {formik.errors[error]}
            </div>
          ))
        : ''}
    </form>
  );
};

export default AddReviewForm;
