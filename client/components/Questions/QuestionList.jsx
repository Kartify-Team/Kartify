import React, { useState, useEffect } from "react";
import { removeHTMLTags } from "../../utils"
import AnswerList from "./AnswerList";
import AddQuestionModal from "./AddQuestionModal.jsx"

const QuestionList = ({ questions }) => {
  const [maxQs, setMaxQs] = useState(4);
  const [modalIsOpen, setIsOpen] = React.useState(false);


  let addMoreQuestions = false;
  if (questions.length > 0) {
    let count = 0;
    return (
      <div id="question-list-container">
        {questions.map((question) => {
          if (count < maxQs &&
            Object.keys(question.answers).length > 0) {
            count++;
            return (
              <div id="question-container" key={question.question_id}>
                <h2>Q: {removeHTMLTags(question.question_body)}</h2>
                <div>
                  <AnswerList answers={question.answers} />
                </div>
              </div>
            );
          }
          if (count === maxQs) {
            count++;
            return <button className="action-button"
              onClick={() => setMaxQs(maxQs + 2)}>
              More Answered Questions
            </button>
          }

        })}
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
