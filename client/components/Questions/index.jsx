import React, { useState, useEffect } from "react";
import QuestionListContainer from "../../containers/Questions/QuestionList";
import AnswerForm from "./AnswerForm";
import Search from "./Search";

import greenfieldAPI from "./../../greenfieldAPI";
import { productData } from "./sampleData";

const Questions = ({ addQuestionList }) => {
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
    </div>
  );
};
export default Questions;
