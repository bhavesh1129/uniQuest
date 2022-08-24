import React from "react";
import "./Home.css";
import Media from "react-bootstrap/Media";
import Card from 'react-bootstrap/Card';
import { withRouter } from "react-router-dom";

class Question extends React.Component {
  onQuestionClicked = () => {
    this.props.history.push({
      pathname: "/answerpage",
      state: {
        question: this.props.question,
      },
    });
  };
  render() {
    const { title, topic, date,name } = this.props.question;
    return (
      <div onClick={this.onQuestionClicked}>
        <Card >
          <Media className="question">
            <div id="answer" className="mr-3">
              {this.props.question.answerIds.length}
              <br />
              Answers
            </div>
            <Media.Body id="align" >
              <h5 className="mt-0">{title}</h5>
              <p className="footer">Topic: {topic}</p>
              <p id="date" className="footer">
                Date: {date}
              </p> 
              <p id="date" className="footer">
                Name: {name}
              </p> 
            </Media.Body>
          </Media>
        </Card>
        {/* <div style={{ borderTop: "2px solid #fff " }}></div> */}
      </div>
    );
  }
}

export default withRouter(Question);
