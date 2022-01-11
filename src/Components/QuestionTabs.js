import React from "react";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import "./Home.css";
import Question from "./Question.js";
// import AddAnswer from "./AddAnswer";

class QuestionTabs extends React.Component {
  state = {
    sortedQuestions: this.props.data.questions.sort((question1, question2) => {
      return (
        new Date(question2.date.split("-")) -
        new Date(question1.date.split("-"))
      );
    }),
  };
  recentQuestions = () => {
    this.setState({
      sortedQuestions: this.props.data.questions.sort(
        (question1, question2) => {
          return (
            new Date(question2.date.split("-")) -
            new Date(question1.date.split("-"))
          );
        }
      ),
    });
  };

  mostResponses = () => {
    this.setState({
      sortedQuestions: this.props.data.questions.sort(
        (question1, question2) => {
          return question2.answerIds.length - question1.answerIds.length;
        }
      ),
    });
  };
  unAnswered = () => {
    this.setState({
      sortedQuestions: this.props.data.questions.filter((question) => (question.answerIds.length === 0
      )),
    });
  };

  render() {
    return (
      <>
        <div id="cont">
         {/* <div class="flex flex-1 w-1/2 h-10 bg-black text-white">
           <button class="w-1/3 focus:bg-grey-100">Recent</button>
         </div> */}
          <ButtonGroup  id="btn" >
            <Button  id="bcolor" onClick={this.recentQuestions} selected>
            Recent Questions
            </Button>
            {/* <Button id="bcolor"  onClick={this.mostResponses}>
              Most Responses
            </Button>
           
            <Button id="bcolor"  onClick={this.unAnswered}>
              Unanswered
            </Button> */}
          </ButtonGroup> 
          <Card >
            {this.state.sortedQuestions.map((question) => (
              <Question question={question} key={question.id} />
            ))}
          </Card>
        </div>
      </>
    );
  }
}

export default QuestionTabs;
