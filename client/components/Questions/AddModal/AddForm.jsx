import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import { submitAQuestion } from '../../../greenfieldAPI';
import { isValidEmail } from '../../../utils';
import ImageUpload from './ImageUpload';

const AddForm = ({
  product = {},
  addQuestionList,
  setIsOpen,
  formType,
  question = {}
}) => {
  const [errorsOn, setErrorsOn] = useState(false);
  const display = {
    addQuestion: {
      title: 'Your Question',
      submit: "SUBMIT QUESTION"
    },
    addAnswer: {
      title: 'Submit your answer',
      submit: "SUBMIT YOUR ANSWER"
    }
  };
  const [photos, setPhotos] = useState([]);

  const formik = useFormik({
    initialValues: { question: '', nickname: '', email: '' },
    onSubmit: ({ body, nickname, email }) => {
      console.log({ body, name: nickname, email });
      return submitAQuestion(
        { body, name: nickname, email, photos },
        formType,
        product,
        question
      )
        .then(() => addQuestionList(product.id))
        .then(() => setIsOpen(false))
        .catch(err => console.log(err));
    },
    validate: ({ body, nickname, email }) => {
      const errors = {};
      if (!body) {
        errors.body = 'Required';
      }
      if (!nickname) {
        errors.nickname = 'Required';
      }
      if (nickname.length > 60) {
        errors.nickname =
          'Max characters reached. Maximum allowed characters is 1000';
      }
      if (!email) {
        errors.email = 'Required';
      }
      if (!isValidEmail(email)) {
        errors.email = 'That does not look like a valid email address.';
      }
      return errors;
    }
  });
  return (
    <form id="add-question-form" onSubmit={formik.handleSubmit}>
      <br />
      <label htmlFor="body">{display[formType].title}</label>
      <textarea
        name="body"
        onChange={formik.handleChange}
        value={formik.values.body}
        placeholder="Enter up to 1000 characters."
      />
      {errorsOn && formik.errors.body ? (
        <div className="form-error">{formik.errors.body}</div>
      ) : (
          <div></div>
        )}
      <label htmlFor="nickname">What is your nickname?</label>
      <input
        id="nickname"
        name="nickname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nickname}
        placeholder="Example: jack543!"
      />
      {errorsOn && formik.errors.nickname ? (
        <div className="form-error">{formik.errors.nickname}</div>
      ) : (
          <div></div>
        )}
      <sub>For privacy reasons, do not use your full name or email address</sub>
      <label htmlFor="email">Your email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Example: jack@gmail.com"
      />
      {errorsOn && formik.errors.email ? (
        <div className="form-error">{formik.errors.email}</div>
      ) : (
          <div></div>
        )}

      <sub>For authentication reasons, you will not be emailed</sub>
      <br />
      {formType === 'addAnswer' ? (
        <ImageUpload updatePhotos={setPhotos} />
      ) : (
          <></>
        )}
      <button
        id="submit"
        type="submit"
        className="action-button"
        onClick={() => setErrorsOn(true)}
      >
        {display[formType].submit}
      </button>
    </form>
  );
};
export default AddForm;
