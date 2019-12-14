import React, { useState, useEffect } from "react";

import QuestionCard from "./QuestionCard";
import AddQuestion from "./AddQuestion"
import { markAsHelpful } from "../../greenfieldAPI/"

const QuestionList = ({ questions, product, query, addQuestionList }) => {
  const [maxQs, setMaxQs] = useState(4);
  const [maxAs, setMaxAs] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (questions.length > 0) {
      const maxTemp = {};
      questions.forEach((question) => maxTemp[question.question_id] = 2)
      setMaxAs(maxTemp)
      setLoading(false)
    }
  }, [questions])

  const handleHelpful = (type, id) => {
    markAsHelpful(id, type)
      .then(() => addQuestionList(product.id))
  }
  let addMoreQuestions = false;
  if (!loading) {
    let count = 0;
    return (
      <div id="question-list-container">
        {questions.map((question) => {
          if (count < maxQs
            // && Object.keys(question.answers).length > 0
          ) {
            if (query === "" || question.question_body.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
              count++;
              return (<QuestionCard question={question}
                product={product} key={question.question_id} handleHelpful={handleHelpful} />);
            }
          }
          if (count === maxQs) {
            count++;
            return <button className="action-button" id="q-list"
              onClick={() => setMaxQs(maxQs + 2)} key={question.question_id}>
              More Answered Questions
            </button>
          }

        })}
        <button className="action-button" id="q-list"
          onClick={() => setIsOpen(true)}>
          Add a Question
          </button>
        <AddQuestion setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} product={product} formType="addQuestion" />

      </div>
    );
  } else {
    return <div id="question-list-container">Loading Q List</div>;
  }
};
export default QuestionList;
