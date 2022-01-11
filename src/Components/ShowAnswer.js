import React from "react";
import Card from 'react-bootstrap/Card';
import './Answer.css';
const ShowAnswer = ({ answer }) => {
  return (
    <>
      <div id="answercardtop">
        <Card id="answercard" >
          <li key={answer.id}>
            {answer.response}
            <br />
            <br />
            <p className="dfooter">
              Date added: {answer.date}
            </p>
          </li>
        </Card>
      </div>
    </>
  );
};
export default ShowAnswer;
