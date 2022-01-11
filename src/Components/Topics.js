import React from "react";
import Question from "./Question.js";
import './Topics.css';
import qs from 'qs';
function getTopic(props) {
  return qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  }).t;
} 

function showQuestion(props){
  
  let topic=getTopic(props);
  const filteredTopic=props.questions.filter((question) => question.topic === topic).map((question)=>{
    return <><Question question={question} key={question.topic} /></>
  });
  return filteredTopic;
  
}

function Topic(props) {
    return (
<div >

      <div id="topicrs">
        <h4 id="heading">Topic: "{getTopic(props)}"</h4>
        {showQuestion(props)}
      </div>
      
      </div>
    );
  }
export default Topic;
