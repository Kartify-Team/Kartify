import React from "react";
import AnswerList from "./AnswerList";

const QuestionList = ({ questions }) => {
  console.log(questions);
  if (questions) {
    return questions.map((question) => {
      return (
        <div id="question-container">
          <h2>Q: {question.question_body}</h2>
          <div>
            A: <AnswerList answers={question.answers} />
          </div>
        </div>
      );
    });
  } else {
    return <div>Loading Q List</div>;
  }
};
export default QuestionList;
