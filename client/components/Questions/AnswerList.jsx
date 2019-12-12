import React from "react";

const AnswerList = ({ answers }) => {
  return Object.keys(answers).map((id) => {
    return (
      <span>
        {answers[id].body}
        <br />
        <br />
      </span>
    );
  });
};

export default AnswerList;
