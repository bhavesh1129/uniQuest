import React from "react";
// import Container from 'react-bootstrap/Container';
import AskQuestionForm from "./AskQuestionForm.js";
import './Home.css';

const AskQuestion = ({ onSubmit }) => {
  return (<div id="alignform" class="formbg">
  <AskQuestionForm onSubmit={onSubmit} />
  </div>);
};

export default AskQuestion;
