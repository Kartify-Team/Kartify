import React from "react";
import AnswerList from "./AnswerList";

const QuestionList = ({ questions }) => {
  return questions.map((question) => {
    return (
      <div>
        <div>Q: {question.question_body}</div>
        <div>
          A: <AnswerList answers={question.answers} />
        </div>
      </div>
    );
  });
};
export default QuestionList;
