import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
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
    const { name, email, password, password2 } = this.state;
    const { register, setAlert } = this.props;

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(
  Register
);
