import React from "react";

const AnswerList = ({ answers }) => {
  return Object.keys(answers).map((id) => {
    return <div>{answers[id].body}</div>;
  });
};

export default AnswerList;
