import React, { useState, useEffect } from "react";
import { removeHTMLTags, formatDate } from "../../utils"
import AddModal from "./AddModal"
import { reportPost } from "../../greenfieldAPI/"
import ThumbnailGallery from './ThumbnailGallery'


const QuestionCard = ({ question, product, handleHelpful, query }) => {
  let [expanded, setExpanded] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [reported, setReported] = useState({});
  const [questionHTML, setQuestionHTML] = useState(<></>);
  useState(() => {
    const reported = {};
    question.answers.forEach((answer) => reported[answer.id] = false)
  }, [question])
  const handleReport = (id) => {
    reportPost(id)
      .then(() => {
        const reportedCopy = { ...reported };
        reportedCopy[id] = true;
        setReported(reportedCopy)
      })
  }
  useEffect(() => {
    const body = removeHTMLTags(question.question_body);
    const highlighted = {};
    const start = body.indexOf(query);
    for (let i = start; i < start + query.length; i++) {

      highlighted[i] = true;
    }
    setQuestionHTML(body.split("").map((char, i) => highlighted[i] ?
      <span className="highlighted" key={i}>{char}</span> : <span key={i}>{char}</span>))
  }, [question, query])

  return <div id="question-container" key={question.question_id}>
    <div id="question">
      <h2>Q: {questionHTML}</h2>
      <sub><a onClick={() => handleHelpful("question", question.question_id)}>Helpful?</a> Yes ({question.question_helpfulness}) | <a onClick={() => setIsOpen(true)}>Add Answer</a></sub>
      <AddModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} question={question} product={product} formType="addAnswer" />
    </div>

    <div className="answers">
      {question.answers.map((answer, index) => {
        if (index < 2 || expanded) {
          return (

            <span key={answer.id}>
              {index === 0 ? (
                <p id="first">A: {removeHTMLTags(answer.body)}</p>) : (
                  <p id="more">{removeHTMLTags(answer.body)}</p>
                )}
              <ThumbnailGallery imageURLs={answer.photos} />
              <br />
              <sub id="answerer">
                by {answer.answerer_name === "Seller" ? <b>{answer.answerer_name}</b> : <>{answer.answerer_name}</>},{" "}
                {formatDate(answer.date)}
                &nbsp; | &nbsp; <a onClick={() => handleHelpful("answer", answer.id)}>Helpful?</a> Yes ({answer.helpfulness})
                &nbsp; | &nbsp; {reported[answer.id] ? <>Reported</> : <a onClick={() => handleReport(answer.id)}>Report</a>}
              </sub>
            </span>
          );
        }
      })}
      {expanded ?
        <div id="load-more" onClick={() => setExpanded(false)}>
          Collapse Answers
    </div>
        : <>{question.answers.length > 2 ?
          <div id="load-more" onClick={() => setExpanded(true)}>
            Load More Answers
        </div>
          : <></>}</>

      }
    </div>
  </div>
};

export default QuestionCard;
