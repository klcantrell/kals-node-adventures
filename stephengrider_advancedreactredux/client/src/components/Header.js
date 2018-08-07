import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <React.Fragment>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </React.Fragment>
      )
    }
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Header);