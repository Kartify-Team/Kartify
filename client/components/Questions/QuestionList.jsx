import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import AddModal from "./AddModal"
import { markAsHelpful } from "../../greenfieldAPI/"

const QuestionList = ({ questions, product, query, addQuestionList }) => {
  const [maxQs, setMaxQs] = useState(2);
  const [maxAs, setMaxAs] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bottomReached, setBottomReached] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(false);
  const [allQuestionsDisplayed, setAllQuestionsDisplayed] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  useEffect(() => {
    if (questions.length > 0) {
      const maxTemp = {};
      questions.forEach((question) => maxTemp[question.question_id] = 2)
      setMaxAs(maxTemp)
      setLoading(false)
    }
  }, [questions])

  const scrollChange = (e) => {
    const element = e.target.parentNode;
    if (!loading && !lazyLoading) {
      setBottomReached(element.clientHeight === element.scrollHeight ||
        element.scrollHeight - element.scrollTop === element.clientHeight)
    }
  }
  useEffect(() => {
    const hasMoreSpace = document.getElementById("question-list-container").clientHeight <= window.innerHeight * .86;
    if (seeMore && (hasMoreSpace || bottomReached)) {
      setBottomReached(true)
      if (maxQs < questions.length) {
        setLazyLoading(true)
        setTimeout(() => {
          setLazyLoading(false)
          setMaxQs(maxQs + 2)
          setBottomReached(false)
        }, 2000)
      } else {
        setAllQuestionsDisplayed(true);
      }
    }
  }, [seeMore, bottomReached])

  const handleHelpful = (type, id) => {
    markAsHelpful(id, type)
      .then(() => addQuestionList(product.id))
  }

  const addQuestion =
    <>
      <button className="action-button" id="q-list"
        onClick={() => setIsOpen(true)}>
        Add a Question
          </button>
      <AddModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} product={product} formType="addQuestion" />
    </>

  if (!loading) {
    let count = 0;
    return (
      <div id="question-list-container" onScroll={scrollChange}>
        {questions.map((question) => {
          if (count < maxQs) {
            if (query === "" || question.question_body.toUpperCase().indexOf(query.toUpperCase()) !== -1) {
              count++;
              return (<QuestionCard question={question}
                product={product} key={question.question_id}
                query={query}
                handleHelpful={handleHelpful} />);
            }
          }
          if (count === maxQs && !seeMore) {
            count++;
            return <button className="action-button" id="q-list"
              onClick={() => setSeeMore(true)} key={question.question_id}>
              More Answered Questions
            </button>
          }

        })}
        {lazyLoading ? <img id="spinner" /> : <></>}
        {allQuestionsDisplayed ? addQuestion : <></>}
      </div>
    );
  } else if (product) {
    return <div id="question-list-container">
      {addQuestion}
    </div>;
  } else {
    return <div id="question-list-container">Loading Q List</div>
  }
};
export default QuestionList;
