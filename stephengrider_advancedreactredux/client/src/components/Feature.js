import React, { Component } from 'react';
import { withRequireAuth } from './auth/RequireAuth';

class Feature extends Component {
  render() {
    return <div>This is the feature component</div>;
  }
}

export default withRequireAuth(Feature);