import './Unsubscribe.css';
import React  from 'react';
import axios from 'axios';
import Navigation from '../Navigation';
import Form from '../Form/Form';
import {Alert} from 'react-bootstrap';
import logo from '../logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

class Unsubscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "Rajat",
      showUnsubscribe: false,
      unsubscribeMessage: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      number: this.state.value
    };
    axios.post('https://trivia-texter-api.herokuapp.com/firebaseUnsubscribe', { user })
      .then(res => {
        this.setState({
          showUnsubscribe: true,
          unsubscribeMessage: res.data
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <Container fluid>
          <div>
            <Navigation/>
            {this.state.showUnsubscribe && <Alert variant='info'>{this.state.unsubscribeMessage}</Alert>}
          </div>
          <Row id='topRow'>
            <Col md={{span: 4, offset: 4}}>        
              <div>
              <h1 style={{color:"white"}}>Unsubscribe</h1>
              <p>Enter your phone number to unsubscribe from TriviaTexter</p>
              </div> 
            </Col>
          </Row>
          <Row id='secondRow'>
            <Col md={{span: 4, offset: 4}}>        
            <Form value={this.state.value} change={this.handleChange} submit={this.handleSubmit}/>
            </Col>
          </Row>
          <Row id='thirdRow'>
            <Col md={{span: 4, offset: 5}}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } 
}

export default Unsubscribe;