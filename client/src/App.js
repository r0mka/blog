import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';

import Navbar from './components/layout/Navbar';
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

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
