import React, { useState, useEffect } from "react";

import AnswerList from "./AnswerList";
import AddQuestionModal from "./AddQuestionModal.jsx"

const QuestionList = ({ questions }) => {
  const [numQsDisplayed, setNumQsDisplayed] = useState(4);
  const [modalIsOpen, setIsOpen] = React.useState(false);


  let addMoreQuestions = false;
  if (questions.length > 0) {
    return (
      <div id="question-list-container">
        {questions.map((question, index) => {
          if (index < numQsDisplayed) {
            return (
              <div id="question-container">
                <h2>Q: {question.question_body}</h2>
                <div>
                  <AnswerList answers={question.answers} />
                </div>
              </div>
            );
          }

        })}
        <button className="action-button"
          onClick={() => setNumQsDisplayed(numQsDisplayed + 2)}>
          More Answered Questions
          </button>
        <button className="action-button"
          onClick={() => setIsOpen(true)}>
          Add a Question
          </button>
        <AddQuestionModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />

      </div>
    );
  } else {
    return <div id="question-list-container">Loading Q List</div>;
  }
};
export default QuestionList;
