import React, { useState } from 'react';
import { useFormik, useEffect } from 'formik';
import StarsSelector from './StarsSelector';
import CharacteristicForm from './CharacteristicForm';
import { isValidEmail } from '../../../utils';

const AddReviewForm = characteristics => {
  characteristics = characteristics.characteristics;
  const [rating, setRating] = useState(0);
  const [size, setSize] = useState();
  const [width, setWidth] = useState();
  const [comfort, setComfort] = useState();
  const [quality, setQuality] = useState();
  const [length, setLength] = useState();
  const [fit, setFit] = useState();

  const formik = useFormik({
    initialValues: {
      recommendation: '',
      summary: '',
      body: '',
      nickname: '',
      email: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: values => {
      const errors = {};
      if (!rating) errors.rating = 'Required';
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
  return (
    <form id="add-review-form" onSubmit={formik.handleSubmit}>
      <br />
      <label htmlFor="rating">Overall Rating</label>
      <StarsSelector setRating={setRating} />
      {!rating ? <div className="error">Required</div> : null}
      <label htmlFor="recommendation">Do you recommend this product?</label>
      <input
        type="radio"
        name="recommendation"
        value="yes"
        checked={formik.values.recommendation === 'yes'}
        onClick={formik.handleChange}
      />
      No
      <br />
      <input
        type="radio"
        name="recommendation"
        value="no"
        checked={formik.values.recommendation === 'no'}
        onClick={formik.handleChange}
      />
      Yes
      {formik.errors.recommendation ? (
        <div className="error">{formik.errors.recommendation}</div>
      ) : null}
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
      {formik.errors.summary ? (
        <div className="error">{formik.errors.summary}</div>
      ) : null}
      <label htmlFor="body">Review Body</label>
      <textarea
        id="body"
        name="body"
        onChange={formik.handleChange}
        value={formik.values.body}
      />
      {formik.errors.body ? (
        <div className="error">{formik.errors.body}</div>
      ) : null}
      <br />
      <label htmlFor="nickname">What is your nickname?</label>
      <input
        type="text"
        name="nickname"
        onChange={formik.handleChange}
        value={formik.values.nickname}
        placeholder="Example: jackson11!"
      />
      <p>For privacy reasons, do not use your full name or email address</p>
      <label htmlFor="email">Your email</label>
      <input
        type="text"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <button id="submit" type="submit" className="action-button">
        Submit
      </button>
    </form>
  );
};

export default AddReviewForm;
