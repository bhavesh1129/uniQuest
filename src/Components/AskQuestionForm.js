import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Home.css";

class AskQuestionForm extends React.Component {
  state = {
    title: "",
    topic: "Placements",
    description: "",
    name: "Anonymous",
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <div id="from">
          <Container id="askcard" className="justify-content-center overlay">
            <Form onSubmit={this.onFormSubmit}>
              <Form.Group>
                <Form.Label> Name(Leave blank for anonymous) </Form.Label>{" "}
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </Form.Group>{" "}
              <Form.Group>
                <Form.Label> Title </Form.Label>{" "}
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter title"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />{" "}
              </Form.Group>
              <Form.Group>
                <Form.Label> Topic </Form.Label>{" "}
                <Form.Control
                  required
                  as="select"
                  placeholder="Choose your option"
                  value={this.state.topic}
                  onChange={(e) => this.setState({ topic: e.target.value })}
                >
                  <option disabled> Choose your option </option>{" "}
                  <option> Placements </option> <option> Clubs </option>{" "}
                  <option> Sports </option> <option> Events </option>{" "}
                  <option> CSE </option> <option> BBA/B.COM </option>{" "}
                  <option> B.Arch </option> <option> ECE </option>{" "}
                  <option> Others </option>{" "}
                </Form.Control>{" "}
              </Form.Group>{" "}
              <Form.Group>
                <Form.Label> Description </Form.Label>{" "}
                <Form.Control
                  required
                  id="bbox"
                  as="textarea"
                  placeholder="Enter your question here"
                  value={this.state.description}
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                />{" "}
              </Form.Group>{" "}
              <div id="alignbutton">
                <Button id="postq" type="submit">
                  Post Your Question!
                </Button>{" "}
              </div>{" "}
            </Form>{" "}
          </Container>
        </div>{" "}
      </>
    );
  }
}
export default withRouter(AskQuestionForm);
