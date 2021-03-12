import React from 'react';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={this.onChange}
          value={this.state.email}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={this.onChange}
          value={this.state.password}
          name="password"
        />
        <input type="submit" />
      </form>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
