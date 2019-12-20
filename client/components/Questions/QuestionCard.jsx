import React, { useState, useEffect } from "react";
import { removeHTMLTags, formatDate } from "../../utils"
import AddModal from "./AddModal"
import { reportPost } from "../../greenfieldAPI/"
import ThumbnailGallery from './ThumbnailGallery'


const QuestionCard = ({ question, product, handleHelpful, query }) => {
  let [expanded, setExpanded] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [questionHTML, setQuestionHTML] = useState(<></>);
  const [userActions, setUserActions] = useState({});
  useState(() => {
    const q = false;
    const a = {}
    if (question.answers.length > 0) {
      question.answers.forEach((answer) => {
        a[answer.id] = { reported: false, helpful: false };
      })
    }
    setUserActions({ q, a })
  }, [question])
  const handleReport = (id) => {

    reportPost(id)
      .then(() => {
        const temp = { ...userActions };
        temp.a[id].reported = true;
        setUserActions(temp)
      })

  }

  const handleHelpfulClick = (type, id) => {
    handleHelpful(type, id)
    const temp = { ...userActions };
    if (type === "question") {
      temp.q = true;
    } else {
      temp.a[id].helpful = true;
    }
    setUserActions(temp)
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

  if (userActions) {

    return <div className="question-container" key={question.question_id}>
      <div id="question">
        <h2>Q: {questionHTML}</h2>
        <sub>{userActions.q ?
          <>This was helpful!</> :
          <a onClick={() => handleHelpfulClick("question", question.question_id)}>Helpful?</a>}
          &nbsp; Yes ({question.question_helpfulness}) | <a onClick={() => setIsOpen(true)}>Add Answer</a></sub>
        <AddModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} question={question} product={product} formType="addAnswer" />
      </div>

      <div className="answers">
        {question.answers.map((answer, index) => {
          if (index < 2 || expanded) {
            return (

              <span key={answer.id}>
                {index === 0 ? (
                  <p className="first">A: {removeHTMLTags(answer.body)}</p>) : (
                    <p className="more">{removeHTMLTags(answer.body)}</p>
                  )}
                <ThumbnailGallery imageURLs={answer.photos} />
                <br />
                <sub className="answerer">
                  by {answer.answerer_name === "Seller" ? <strong>{answer.answerer_name}</strong> : <>{answer.answerer_name}</>},{" "}
                  {formatDate(answer.date)}
                  &nbsp; | &nbsp; {userActions.a && userActions.a[answer.id] ?
                    userActions.a[answer.id].helpful ?
                      <>This was helpful!</> :
                      <a onClick={() => handleHelpfulClick("answer", answer.id)}>Helpful?</a> :
                    <></>}
                  &nbsp; Yes ({answer.helpfulness})
                &nbsp; | &nbsp; {userActions.a && userActions.a[answer.id] ?
                    (userActions.a[answer.id].reported ?
                      <>Reported</> :
                      <a onClick={() => handleReport(answer.id)}>Report</a>) :
                    <></>}
                </sub>
              </span>
            );
          }
        })}
        {expanded ?
          <div className="load-more" onClick={() => setExpanded(false)}>
            Collapse Answers
    </div>
          : <>{question.answers.length > 2 ?
            <div className="load-more" onClick={() => setExpanded(true)}>
              Load More Answers
        </div>
            : <></>}</>

        }
      </div>
    </div>
  } else {
    return <div>Loading Question Card</div>
  }


};

export default QuestionCard;
