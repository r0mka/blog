import React from 'react';
import { Link } from 'react-router-dom';
export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
