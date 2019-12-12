import React from "react";

const AnswerList = ({ answers, expanded }) => {
  //TODO: Add expanded var into store & allow answers to be expanded

  return Object.keys(answers).map((id, index) => {
    if (index < 2) {
      return (
        <span key={answers[id].id}>
          {index === 0 ? (
            <p id="first-answer">A: {answers[id].body}</p>
          ) : (
            <p id="more-answers">{answers[id].body}</p>
          )}
          <sub id="answerer">
            by {answers[id].answerer_name},{" "}
            {new Date(answers[id].date).toLocaleDateString("en-US", {
              dateStyle: "long"
            })}
            &nbsp; | &nbsp; Helpful? Yes {answers[id].helpfulness}
            &nbsp; | &nbsp; Report
          </sub>
        </span>
      );
    }
  });
};

export default AnswerList;
