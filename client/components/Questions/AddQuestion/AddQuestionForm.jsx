import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { submitAQuestion } from "../../../greenfieldAPI/"

const AddQuestionForm = ({ product, addQuestionList, setIsOpen }) => {
    const formik = useFormik({
        initialValues: { question: "", nickname: "", email: "" },
        onSubmit: ({ question, nickname, email }) => {
            return submitAQuestion(product, {
                body: question,
                name: nickname,
                email
            }).then(() => addQuestionList(product.id))
                .then(() => setIsOpen(false))
                .catch((err) => console.log(err))
        },
        validate: ({ question, nickname, email }) => {
            const errors = {};
            if (!question) {
                errors.question = 'Required';
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
            return errors;
        }
    });
    return (
        <form id="add-question-form" onSubmit={formik.handleSubmit}>
            <br />
            <label htmlFor="question">Your Question</label>
            <textarea
                id="question"
                name="question"
                onChange={formik.handleChange}
                value={formik.values.question}
            />
            {formik.errors.question ? <div className="form-error">{formik.errors.question}</div> : <div></div>}
            <label htmlFor="nickname">What is your nickname?</label>
            <input
                id="nickname"
                name="nickname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nickname}
            />
            {formik.errors.nickname ? <div className="form-error">{formik.errors.nickname}</div> : <div></div>}
            <sub>For privacy reasons, do not use your full name or email address</sub>
            <label htmlFor="email">Your email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : <div></div>}

            <sub>For authentication reasons, you will not be emailed</sub>
            <br />
            <button id="submit" type="submit" className="action-button">Submit</button>
        </form>
    );
};


export default AddQuestionForm