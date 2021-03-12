import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
  render() {
    const guestLinks = (
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul>
        <li>
          <Link to="/profiles">Bloggers</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />{' '}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <a onClick={this.props.logout} href="#!">
            <i className="fas fa-sign-out-alt" />{' '}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    );

    return (
      <nav>
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> Blog
          </Link>
        </h1>
        <React.Fragment>
          {this.props.isAuthenticated ? authLinks : guestLinks}
        </React.Fragment>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(Navbar);
