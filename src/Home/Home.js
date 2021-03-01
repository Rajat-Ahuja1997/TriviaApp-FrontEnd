import './Home.css';
import React  from 'react';
import axios from 'axios';
import Navigation from '../Navigation';
import Form from '../Form/Form';
import logo from '../logo.svg';

class Home extends React.Component {
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

  sendText() {
    axios.post('http://localhost:9000/sendText')
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
          <div className="form">
            <Form value={this.state.value} change={this.handleChange} submit={this.handleSubmit}/>
          </div>
        </div>
        <div className="App">
          <h1 style={{color:"white"}}>Subscribe</h1>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p>{this.state.apiResponse}</p>
          <button onClick={this.sendText}>Send Text</button>
        </div> 
        </div>
    );
  } 
}

export default Home;