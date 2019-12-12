import React, { useState, useEffect } from "react";
import QuestionListContainer from "../../containers/Questions/QuestionList";
import AnswerForm from "./AnswerForm";
import AskForm from "./AskForm";
import Search from "./Search";

import greenfieldAPI from "./../../greenfieldAPI";
import { productData, questionData } from "./sampleData";

const Questions = ({ questions, addQuestionList }) => {
  const [product, setProduct] = useState(productData);

  useEffect(() => {
    addQuestionList(product.id);
  }, [product]);
  return (
    <div className="component" id="q-and-a-container">
      <h3>Questions & Answers</h3>
      <Search />
      <QuestionListContainer />
      <AnswerForm />
      <AskForm />
      <button>More Answered Questions</button>
      <button>Add a Question</button>
    </div>
  );
};
export default Questions;
