import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList";

const QuestionList = ({ questions }) => {
  const [numQsDisplayed, setNumQsDisplayed] = useState(4);

  let addMoreQuestions = false;
  if (questions) {
    return (
      <div id="question-list-container">
        {questions.map((question) => {
          return (
            <div id="question-container">
              <h2>Q: {question.question_body}</h2>
              <div>
                A: <AnswerList answers={question.answers} />
              </div>
            </div>
          );
        })}
        <button>More Answered Questions</button>
        <button>Add a Question</button>
      </div>
    );
  } else {
    return <div id="question-list-container">Loading Q List</div>;
  }
};
export default QuestionList;
