import React  from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
} from "react-router-dom";

class Navigation extends React.Component {

    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">TriviaTexter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/unsubscribe">Unsubscribe</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Router>
        );
    }
}


export default Navigation;