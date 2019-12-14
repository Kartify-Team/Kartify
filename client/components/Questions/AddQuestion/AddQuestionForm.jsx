import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { submitAQuestion, submitAnAnswer } from "../../../greenfieldAPI/"
import { isValidEmail } from "../../../utils/"

const AddQuestionForm = ({ product = {}, addQuestionList, setIsOpen, formType, question = {} }) => {

    const [errorsOn, setErrorsOn] = useState(false)
    const formTypeOptions = {
        addQuestion: {
            display: "Your Question",
            submit: submitAQuestion
        },
        addAnswer: {
            display: "Your Answer",
            submit: submitAnAnswer
        }
    }
    const formik = useFormik({
        initialValues: { question: "", nickname: "", email: "" },
        onSubmit: ({ body, nickname, email }) => {
            return formTypeOptions[formType].submit(product, question, {
                body,
                name: nickname,
                email
            }).then(() => addQuestionList(product.id))
                .then(() => setIsOpen(false))
                .catch((err) => console.log(err))

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
                errors.nickname = 'Max characters reached. Maximum allowed characters is 1000';
            }
            if (!email) {
                errors.email = 'Required';
            }
            if (!isValidEmail(email)) {
                errors.email = "That does not look like a valid email address."
            }
            return errors;
        }
    });
    return (
        <form id="add-question-form" onSubmit={formik.handleSubmit} >
            <br />
            <label htmlFor="body">{formTypeOptions[formType].display}</label>
            <textarea
                id="body"
                name="body"
                onChange={formik.handleChange}
                value={formik.values.body}
            />
            {errorsOn && formik.errors.body ? <div className="form-error">{formik.errors.body}</div> : <div></div>}
            <label htmlFor="nickname">What is your nickname?</label>
            <input
                id="nickname"
                name="nickname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nickname}
            />
            {errorsOn && formik.errors.nickname ? <div className="form-error">{formik.errors.nickname}</div> : <div></div>}
            <sub>For privacy reasons, do not use your full name or email address</sub>
            <label htmlFor="email">Your email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {errorsOn && formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : <div></div>}

            <sub>For authentication reasons, you will not be emailed</sub>
            <br />
            <button id="submit" type="submit" className="action-button" onClick={() => setErrorsOn(true)}>Submit</button>
        </form >
    );
};


export default AddQuestionForm