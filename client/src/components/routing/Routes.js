import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Profile from '../profile/Profile';
import Alert from '../layout/Alert';

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}
