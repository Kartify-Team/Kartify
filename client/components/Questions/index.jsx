import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList";
import AnswerForm from "./AnswerForm";
import AskForm from "./AskForm";

import greenfieldAPI from "./../../greenfieldAPI";
import { productData, questionData } from "./sampleData";

const Questions = () => {
  const [product, setProduct] = useState(productData);
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    greenfieldAPI
      .getQuestions(product.id)
      .then((questions) => setQuestions(questions));
  }, [product]);
  if (questions.results) {
    return (
      <div>
        Q and A Component
        <ul>
          <li>
            <QuestionList questions={questions.results} />
          </li>
          <li>
            <AnswerForm />
          </li>
          <li>
            <AskForm />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default Questions;
