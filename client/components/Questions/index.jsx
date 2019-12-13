import React, { useState, useEffect } from "react";
import QuestionListContainer from "../../containers/Questions/QuestionList";
import Search from "./Search";

// import { productData } from "./sampleData";

const Questions = ({ product, addQuestionList }) => {
  // const [product, setProduct] = useState(productData);

  useEffect(() => {
    if (product) {
      addQuestionList(product.id);
    }
  }, [product]);
  return (
    <div className="component" id="q-and-a-container">
      <h3>Questions & Answers</h3>
      <Search />
      <QuestionListContainer />
    </div>
  );
};
export default Questions;
