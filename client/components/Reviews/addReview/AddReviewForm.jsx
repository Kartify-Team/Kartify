import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

const AddQuestionForm = () => {
  const formik = useFormik({
    initialValues: { rating: '', recommendation: '', summary: '', body: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: values => {
      const errors = {};
      if (!values.rating) {
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
      if (values.summary.length > 60) {
        errors.summary =
          'Max characters reached. Maximum allowed characters is 60';
      }
      return errors;
    }
  });
  return (
    <form id="add-question-form" onSubmit={formik.handleSubmit}>
      <br />
      <label htmlFor="rating">Overall Rating</label>
      <textarea
        id="rating"
        name="rating"
        onChange={formik.handleChange}
        value={formik.values.rating}
      />
      {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
      <label htmlFor="recommendation">Do you recommend this product?</label>
      <input
        id="recommendation"
        name="recommendation"
        type="radio"
        value="Yes"
        onChange={formik.handleChange}
      />
      {formik.errors.recommendation ? (
        <div>{formik.errors.recommendation}</div>
      ) : null}
      <label htmlFor="summary">Review Summary</label>
      <input
        id="summary"
        name="summary"
        type="text"
        value={formik.values.summary}
        onChange={formik.handleChange}
      />
      {formik.errors.summary ? <div>{formik.errors.summary}</div> : null}
      <label htmlFor="body">Review Body</label>
      <textarea
        id="body"
        name="body"
        onChange={formik.handleChange}
        value={formik.values.body}
      />
      {formik.errors.body ? <div>{formik.errors.body}</div> : null}
      <br />
      <button id="submit" type="submit" className="action-button">
        Submit
      </button>
    </form>
  );
};

export default AddQuestionForm;
