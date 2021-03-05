import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
      </form>
    );
  }
}
