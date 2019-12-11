import React from "react";
import AnswerList from "./AnswerList";

const QuestionList = ({ questions }) => {
  if (questions) {
    console.log(questions);
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
  } else {
    return <div>Loading Q List</div>;
  }
};
export default QuestionList;
