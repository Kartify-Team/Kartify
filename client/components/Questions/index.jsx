import React, { useState, useEffect } from "react";
import QuestionListContainer from "../../containers/Questions/QuestionList";
import AnswerForm from "./AnswerForm";
import AskForm from "./AskForm";

import greenfieldAPI from "./../../greenfieldAPI";
import { productData, questionData } from "./sampleData";

const Questions = ({ questions, addQuestionList }) => {
  const [product, setProduct] = useState(productData);

  useEffect(() => {
    // greenfieldAPI
    //   .getQuestions(product.id)
    //   .then((questions) => addQuestionList(questions));
    console.log(addQuestionList);
    addQuestionList(product.id);
  }, [product]);
  if (questions) {
    return (
      <div>
        Q and A Component
        <ul>
          <li>{/* <QuestionListContainer /> */}</li>
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
