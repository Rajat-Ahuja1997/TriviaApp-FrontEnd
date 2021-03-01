import './Unsubscribe.css';
import React  from 'react';
import axios from 'axios';
import Navigation from '../Navigation';
import Form from '../Form/Form';
import {Alert} from 'react-bootstrap';
import logo from '../logo.svg';
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
    axios.post('http://localhost:9000/firebaseUnsubscribe', { user })
      .then(res => {
        this.setState({
          showUnsubscribe: true,
          unsubscribeMessage: res.data
        });
      });
  }

  render() {
    return (
        <div>
        <div>
          <Navigation/>
          {this.state.showUnsubscribe && <Alert variant='info'>{this.state.unsubscribeMessage}</Alert>}
          <div className="unsubscribe-form">
            <Form value={this.state.value} change={this.handleChange} submit={this.handleSubmit}/>
          </div>
        </div>
        <div className="Unsubscribe">
          <h1 style={{color:"white"}}>Unsubscribe</h1>
          <header className="Unsubscribe-header">
            <img src={logo} className="Unsubscribe-logo" alt="logo" />
          </header>
        </div> 
        </div>
    );
  } 
}

export default Unsubscribe;