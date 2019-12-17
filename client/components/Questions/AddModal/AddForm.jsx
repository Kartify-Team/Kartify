import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { submitAQuestion } from "../../../greenfieldAPI"
import { isValidEmail } from "../../../utils"
import axios from 'axios'

const AddForm = ({ product = {}, addQuestionList, setIsOpen, formType, question = {} }) => {

    const [errorsOn, setErrorsOn] = useState(false)
    const display = {
        addQuestion: "Your Question",
        addAnswer: "Submit your answer"
    }
    const [photos, setPhotos] = useState([]);

    const uploadImage = (event) => {
        const files = Array.from(event.target.files)
        const formData = new FormData()
        files.forEach((file, i) => { formData.append(i, file) })
        axios.post('/img', formData)
            .then(res => setPhotos(res.data))
    }

    const formik = useFormik({
        initialValues: { question: "", nickname: "", email: "" },
        onSubmit: ({ body, nickname, email }) => {
            console.log({ body, name: nickname, email })
            return submitAQuestion({ body, name: nickname, email, photos },
                formType, product, question)
                .then(() => addQuestionList(product.id))
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
            <label htmlFor="body">{display[formType]}</label>
            <textarea
                id="body"
                name="body"
                onChange={formik.handleChange}
                value={formik.values.body}
                placeholder="Enter up to 1000 characters."
            />
            {errorsOn && formik.errors.body ? <div className="form-error">{formik.errors.body}</div> : <div></div>}
            <label htmlFor="nickname">What is your nickname?</label>
            <input
                id="nickname"
                name="nickname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nickname}
                placeholder="Example: jack543!"
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
                placeholder="Example: jack@gmail.com"
            />
            {errorsOn && formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : <div></div>}

            <sub>For authentication reasons, you will not be emailed</sub>
            <br />
            {formType === "addAnswer" ? <>
                <label htmlFor="email">Please upload images of your product</label>
                <input id="file" name="file"
                    type="file" onChange={uploadImage} multiple /></>
                : <></>}
            <button id="submit" type="submit" className="action-button" onClick={() => setErrorsOn(true)}>Submit</button>
        </form >
    );
};
export default AddForm