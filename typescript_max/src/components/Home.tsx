import React, { Component } from 'react';

interface HomeProps {
  name: string;
  age: number;
}

export class Home extends Component<HomeProps, {}> {
  render() {
    const numbers = [1, 2, 3];
    const moreNumbers = [4, 5, 6, ...numbers];
    return (
      <div>
        {moreNumbers}
        Hello there, {this.props.name}, you are {this.props.age}, right?
      </div>
    );
  }
}
