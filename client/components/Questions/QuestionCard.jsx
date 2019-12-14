import React, { useState } from "react";
import { removeHTMLTags } from "../../utils"
import AddQuestion from "./AddQuestion"
const QuestionCard = ({ question, product, handleHelpful }) => {
  let [expanded, setExpanded] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return <div id="question-container" key={question.question_id}
    onClick={() => expanded ? setExpanded(false) : null}>
    <div id="question">
      <h2>Q: {removeHTMLTags(question.question_body)}</h2>
      <sub><a onClick={() => handleHelpful("question", question.question_id)}>Helpful?</a> Yes ({question.question_helpfulness}) | <a onClick={() => setIsOpen(true)}>Add Answer</a></sub>

      <AddQuestion setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} question={question} product={product} formType="addAnswer" />

    </div>

    <div className="answers">
      {question.answers.map((answer, index) => {
        if (index < 2 || expanded) {
          return (

            <span key={answer.id}>
              {index === 0 ? (
                <p id="first">A: {removeHTMLTags(answer.body)}</p>
              ) : (
                  <p id="more">{removeHTMLTags(answer.body)}</p>
                )}
              <sub id="answerer">
                by {answer.answerer_name},{" "}
                {new Date(answer.date).toLocaleDateString("en-US", {
                  dateStyle: "long"
                })}
                &nbsp; | &nbsp; <a onClick={() => handleHelpful("answer", answer.id)}>Helpful?</a> Yes ({answer.helpfulness})
                &nbsp; | &nbsp; Report
              </sub>
            </span>
          );
        } else if (index === 2) {
          return <div id="load-more" key={answer.id} onClick={() => setExpanded(true)}>
            Load More Answers
          </div>
        }
      })}
    </div>
  </div>
};

export default QuestionCard;
