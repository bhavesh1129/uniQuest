import React from "react";
import Question from "./Question.js";
import { Link } from "react-router-dom";
import './SearchResult.css';
import qs from 'qs';

class SearchResults extends React.Component {
  render() {
    let query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).q;
    const filteredQuestions = this.props.questions.filter((question) => ( question.title.toLowerCase().includes(query.toLowerCase())
    ));
   
    if (filteredQuestions.length === 0)
      return (
        <div id="nomatch" className="justify-content-center">
        {/* <img src={Noresult} alt=":(" id="noresult"></img> */}
        <h1>No matching results found for "{query}"</h1>
        <br/>
        <Link to="/askquestion"  id="askbtn">Ask a Question!</Link>
        </div>
     
      );
    else
      return (
       
        <div id="foundmatch">
          <h4 id="heading">Search Results For "{query}"</h4>
          {filteredQuestions.map((question) => {
            return <Question question={question} key={question.id} />;
          })}
          </div>
          
      );
  }
}

export default SearchResults;
