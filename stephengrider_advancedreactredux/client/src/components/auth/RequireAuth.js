import React, { Component } from 'react';
import { connect } from 'react-redux';

class RequireAuth extends Component {
  componentDidMount() {
    this.shouldNavigateAway();
  }
  componentDidUpdate() {
    this.shouldNavigateAway();
  }
  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        {this.props.render()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated,
  }
};

const ConnectedRequireAuth = connect(mapStateToProps)(RequireAuth);

const withRequireAuth = ChildComponent => {
  return class extends Component {
    render() {
      return (
        <ConnectedRequireAuth {...this.props} render={() => <ChildComponent />} />
      );
    }
  }
};

export { withRequireAuth };