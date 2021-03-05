import React from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
    };
  }

  onChange = (e) => {
    this.setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.password2) {
      this.props.setAlert('Passwords do not match', 'danger');
    } else {
      //   register({ name, email, password });
      console.log('SUCCESS');
    }
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password2"
              name="password2"
              onChange={this.onChange}
              value={this.state.password2}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { setAlert })(Register);
