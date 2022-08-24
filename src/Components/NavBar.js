import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

import { BsSearch} from 'react-icons/bs';
import "./NavBar.css";
import { Link, withRouter} from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";
import logo from './u1.png';
// const user = useContext(UserContext);
//   const {photoURL, displayName, email} = user;
//   console.log(user);
// let univ=email.split("@");
// let college=univ[1].split(".");
// if(college[0]==="gmail"){
//   college[0]="Unknown"
// }
class NavBar extends React.Component {
  state = { term: "" };
  onTopicSelected = (eventKey, event) => {
    this.props.history.push({
      pathname: "/topics",
      search: `t=${eventKey}`,
    });
  };
  onSearchSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/search",
      search: `q=${this.state.term}`,
    });
  };

  render() {
    return (
      <>
        <Navbar expand="lg" className="nav2" fixed="top">
          <Navbar.Brand id="style">
            <Link id="style" to="/">
             <img src={logo} className="w-14 h-10"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link id="style" to="/askquestion">
                  Ask a Question
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link id="style" to="/users">
                  Connect
                </Link>
              </Nav.Link>
              <NavDropdown
                title="Categories"
                id="basic-nav-dropdown"
                onSelect={this.onTopicSelected}
              >
                {/* <NavDropdown.Item eventKey="1st year">1st year</NavDropdown.Item>
                <NavDropdown.Item eventKey="2nd year">2nd year</NavDropdown.Item>
                <NavDropdown.Item eventKey="3rd year">3rd year</NavDropdown.Item>
                <NavDropdown.Item eventKey="4th year">4th year</NavDropdown.Item> */}
                <NavDropdown.Item eventKey="Placements">
                  Placements
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Clubs">Clubs</NavDropdown.Item>
                <NavDropdown.Item eventKey="Sports">Sports</NavDropdown.Item>
                <NavDropdown.Item eventKey="Events">Events</NavDropdown.Item>
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                  <NavDropdown.Item eventKey="CSE">CSE</NavDropdown.Item>
                  <NavDropdown.Item eventKey="BBA/BCom">BBA/B.COM</NavDropdown.Item>
                  <NavDropdown.Item eventKey="B.Arch">
                    Nursing
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="ECE">ECE</NavDropdown.Item>
                  <NavDropdown.Item eventKey="Others">Others</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </Nav>

           
            <Form id="rtdiv" className="d-flex" onSubmit={this.onSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <Button variant="outline-dark" type="submit">
                <BsSearch className="search" />
              </Button>
            </Form>
            <button
              className="px-2 py-2 rounded-md text-sm font-medium text-white bg-black active:bg-grey-900 border-2 transition-all"
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </button>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavBar);
