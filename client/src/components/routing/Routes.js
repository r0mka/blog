import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../profile/Profile';

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}
