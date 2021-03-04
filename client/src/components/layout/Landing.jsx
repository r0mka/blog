import React from 'react';
import { Link } from 'react-router-dom';
export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}
