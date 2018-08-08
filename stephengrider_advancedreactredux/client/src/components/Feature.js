import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withRequireAuth } from './auth/RequireAuth';
import * as actions from '../actions';

class Feature extends Component {
  constructor(props) {
    super(props)
    this.getFeature();
  }
  getFeature() {
    this.props.getFeature(this.props.token, () => {
      this.props.history.push('/');
    });
  }
  render() {
    return (
      <div>
        <h2>Hi {this.props.feature}, this is the feature component</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feature: state.auth.feature,
  };
}

export default compose(
  withRequireAuth,
  connect(mapStateToProps, actions),
  withRouter,
)(Feature);