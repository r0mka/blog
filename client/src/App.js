import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import { Provider } from 'react-redux';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

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
      // <Provider store={store}>
      <Router>
        <React.Fragment>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </React.Fragment>
      </Router>
      // </Provider>
    );
  }
}

export default App;
