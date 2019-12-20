import React, { useState, useEffect } from 'react';
import QuestionListContainer from '../../containers/Questions/QuestionList';
import SearchContainer from '../../containers/Questions/Search';

// import { productData } from "./sampleData";

const Questions = ({ product, addQuestionList, questions }) => {
  // const [product, setProduct] = useState(productData);

  useEffect(() => {
    if (product) {
      addQuestionList(product.id);
    }
  }, [product]);
  return (
    <div className="component" id="q-and-a-container">
      <h3 className="section-title">Questions & Answers</h3>
      {questions.length > 0 ? <SearchContainer /> : <></>}
      <QuestionListContainer />
    </div>
  );
};
export default Questions;
