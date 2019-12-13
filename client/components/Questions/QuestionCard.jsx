import React, { useState } from "react";
import { removeHTMLTags } from "../../utils"
import AddAnswer from "./AddAnswer"
const QuestionCard = ({ question, product }) => {
  let [expanded, setExpanded] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return <div id="question-container" key={question.question_id}
    onClick={() => expanded ? setExpanded(false) : null}>
    <div id="question">
      <h2>Q: {removeHTMLTags(question.question_body)}</h2>
      <sub>Helpful? Yes ({question.question_helpfulness}) | <span onClick={() => setIsOpen(true)}>Add Answer</span></sub>

      <AddAnswer setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} question={question} product={product} />

    </div>

    <div className="answers">
      {Object.keys(question.answers).map((id, index) => {
        if (index < 2 || expanded) {
          return (

            <span key={question.answers[id].id}>
              {index === 0 ? (
                <p id="first">A: {removeHTMLTags(question.answers[id].body)}</p>
              ) : (
                  <p id="more">{removeHTMLTags(question.answers[id].body)}</p>
                )}
              <sub id="answerer">
                by {question.answers[id].answerer_name},{" "}
                {new Date(question.answers[id].date).toLocaleDateString("en-US", {
                  dateStyle: "long"
                })}
                &nbsp; | &nbsp; Helpful? Yes ({question.answers[id].helpfulness})
                &nbsp; | &nbsp; Report
              </sub>
            </span>
          );
        } else if (index === 2) {
          return <div id="load-more" key={question.answers[id].id} onClick={() => setExpanded(true)}>
            Load More Answers
          </div>
        }
      })}
    </div>
  </div>


};

export default QuestionCard;
