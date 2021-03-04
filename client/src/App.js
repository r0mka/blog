import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: null };
  }
  componentDidMount() {
    axios
      .get('/api')
      .then((res) => this.setState({ msg: res.data.msg }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>{this.state.msg ? this.state.msg : ''}</h1>
        </header>
      </div>
    );
  }
}

export default App;
