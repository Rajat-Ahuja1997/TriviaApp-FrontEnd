import React  from 'react';
import Navigation from '../Navigation';
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      value: "",
      name: "Rajat"
    }
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