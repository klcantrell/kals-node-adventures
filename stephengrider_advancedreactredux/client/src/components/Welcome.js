import React from 'react';
import { connect } from 'react-redux';

const Welcome = ({errorMessage}) => {
  return (
    <div>
      <h3>Welcome! Sign up or sign in!</h3>
      <p>{errorMessage}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default connect(mapStateToProps)(Welcome);