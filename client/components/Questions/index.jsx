import React from "react";
import QuestionList from './QuestionList'
import AnswerList from './AnswerList'
import AnswerForm from './AnswerForm'
import AskForm from './AskForm'

const Questions = ({product}) =>{
 
    return <div>
        Q and A Component
        <ul>
            <li><QuestionList /></li>
            <li><AnswerList /></li>
            <li><AnswerForm /></li>
            <li><AskForm /></li>
            </ul>
    </div>
  
}
export default Questions