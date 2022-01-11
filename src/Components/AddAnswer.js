import React from "react";
import {Media,Card,Form,Button,Container} from "react-bootstrap";
import ShowAnswer from "./ShowAnswer.js";
// import SideBar from './SideBar.js';
import './Answer.css';

class AddAnswer extends React.Component {
  state = { answer: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addAnswer(
      this.state.answer,
      this.props.location.state.question.id
    );
  };
  render() {
    console.log(this.props);
    const question = this.props.location.state.question;
    return (
      <>
        <div id="answerbackground">
    {/* <div className="grid-container">
        <div className="galign">
      <SideBar data={this.props.data}/>
      </div>
      </div>
       */}
      <Container id="answercont">
        
          <Card id="questioncard">
          <Media >
            <Media.Body id="align">
              <h5 className="mt-0" id="questitle">{question.title}</h5>
              <p className="footer">Topic: {question.topic}</p>
              <p id="date" className="footer">
                Date: {question.date}
              </p>
              <hr/>
              {/* <p id="desc">
                Description:</p>
               <p id="descbody"> {question.description}</p> */}
          
            </Media.Body>
          </Media>
          </Card>
          </Container>


        <Container id="answercont2">
        <div><p className="anslength"> 
   {question.answerIds.length} Answers
  </p></div>
        <div id="answerbody">
          {this.props.data.answers.map((answer) => {
            if (answer.questionId === question.id){
              return <ShowAnswer answer={answer} />;}
              return <></>;
          })}
        </div>
        </Container>

        <Container id="answercont2">
        <div id="addans"  className="justify-content-center">
          <Form onSubmit={this.onFormSubmit}>
        <Form.Group>
            <Form.Label id="label">Add Answer: </Form.Label>
            <Form.Control
              required
              id="textarea"
              as="textarea"
              placeholder="Enter your answer here"
              value={this.state.answer}
            onChange={(e) => {
              this.setState({ answer: e.target.value });
            }}/>

          </Form.Group>
<div id="alignbutton">
          <Button id="postq" type="submit">
            Add Answer
          </Button>
          </div>
          </Form>
        </div>
        </Container>
        </div>
      </>
    );
  }
}
export default AddAnswer;
