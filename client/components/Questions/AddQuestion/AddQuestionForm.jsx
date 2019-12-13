import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";

const AddQuestionForm = () => {
    const formik = useFormik({
        initialValues: { question: "", nickname: "", email: "" },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form id="add-question-form" onSubmit={formik.handleSubmit}>
            <label htmlFor="question">Your Question</label>
            <textarea
                id="question"
                name="question"
                onChange={formik.handleChange}
                value={formik.values.question}
            />
            <label htmlFor="nickname">What is your nickname?</label>
            <input
                id="nickname"
                name="nickname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nickname}
            />
            <br />
            <sub>For privacy reasons, do not use your full name or email address</sub>
            <label htmlFor="email">Your email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <br />
            <sub>For authentication reasons, you will not be emailed</sub>
            <br />
            <button id="submit" type="submit" className="action-button">Submit</button>
        </form>
    );
};


export default AddQuestionForm