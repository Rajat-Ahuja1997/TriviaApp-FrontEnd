import React  from 'react';
import axios from 'axios';
import Navigation from '../Navigation';
import './About.css';
import Form from '../Form/Form';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      value: "",
      name: "Rajat"
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
    axios.post('http://localhost:9000/firebaseSubscribe', { user })
      .then(res => {
        console.log(res.data);
      })
  }

  callAPI() {
    return;
    // fetch("http://localhost:9000/testAPI")
    // .then(res => res.text())
    // .then(res => this.setState({apiResponse: res}))
  }
  
  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
        <div>
        <div>
          <Navigation/>
        </div>
        <div className="App">
          <h1>About</h1>
          <p>TriviaTexter is an application that sends you daily trivia facts.</p>
          <p>TriviaTexter is powered by ReactJS, Express/NodeJS, Google Firebase, and Twilio.</p>
        </div> 
        </div>
    );
  } 
}

export default About;