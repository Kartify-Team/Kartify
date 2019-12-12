import React, { useState } from "react";
import { removeHTMLTags } from "../../utils"
const AnswerList = ({ question }) => {
  let [expanded, setExpanded] = useState(false);
  return <div id="question-container" key={question.question_id}
    onClick={() => setExpanded(!expanded)}>
    <h2>Q: {removeHTMLTags(question.question_body)}</h2>
    <div>
      {Object.keys(question.answers).map((id, index) => {
        if (index < 2 || expanded) {
          return (
            <span key={question.answers[id].id}>
              {index === 0 ? (
                <p id="first-answer">A: {removeHTMLTags(question.answers[id].body)}</p>
              ) : (
                  <p id="more-answers">{removeHTMLTags(question.answers[id].body)}</p>
                )}
              <sub id="answerer">
                by {question.answers[id].answerer_name},{" "}
                {new Date(question.answers[id].date).toLocaleDateString("en-US", {
                  dateStyle: "long"
                })}
                &nbsp; | &nbsp; Helpful? Yes {question.answers[id].helpfulness}
                &nbsp; | &nbsp; Report
          </sub>
            </span>
          );
        }
      })}
    </div>
  </div>


};

export default AnswerList;
