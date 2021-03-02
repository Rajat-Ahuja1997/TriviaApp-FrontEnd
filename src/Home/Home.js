import './Home.css';
import React  from 'react';
import axios from 'axios';
import Navigation from '../Navigation';
import Form from '../Form/Form';
import logo from '../logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      triviaFact: "",
      showAnswer: false,
      text: "Show Answer"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  sendText() {
    axios.post('https://trivia-texter-api.herokuapp.com/sendText')
  }

  showAnswer() {
    this.setState({showAnswer: !this.state.showAnswer})
    if (this.state.showAnswer) {
      this.setState({text: "Show Answer"});
    } else {
      this.setState({text: "Hide Answer"});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      number: this.state.value
    };
    axios.post('https://trivia-texter-api.herokuapp.com/firebaseSubscribe', { user })
      .then(res => {
        console.log(res.data);
      })
  }

  retrieveRandomFact() {
    axios.get('http://localhost:9000/retrieveFact')
    .then(res => {
        this.setState({triviaFact: res.data});
    });
  }
  
  componentDidMount() {
    this.retrieveRandomFact();
  }

  render() {
    return (
      <div className='App'>
        <Container fluid>
          <div>
            <Navigation/>
          </div>
          <Row id='topRow'>
            <Col md={{span: 4, offset: 4}}>        
              <div>
                <h1>Subscribe</h1>
                <p>Enter your phone number to subscribe for a daily trivia fact from TriviaTexter!</p>
                <button onClick={this.sendText}>Send Text</button>
              </div> 
            </Col>
          </Row>
          <Row id='secondRow'>
            <Col md={{span: 4, offset: 4}}>        
              <Form value={this.state.value} change={this.handleChange} submit={this.handleSubmit}/>
            </Col>
          </Row>
          <Row id='thirdRow'>
            <Col md={{span: 4, offset: 1}} style={{height: "30vmin"}}>
            <Card
              bg='primary'
              text='light'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Random Trivia Fact</Card.Header>
              <Card.Body>
                <Card.Title>{this.state.triviaFact.Question}?</Card.Title>
                <Card.Text><button onClick={this.showAnswer} class="btn btn-warning">{this.state.text}</button></Card.Text>
                {this.state.showAnswer && <Card.Text>{this.state.triviaFact.Answer}</Card.Text>}
              </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } 
}

export default Home;