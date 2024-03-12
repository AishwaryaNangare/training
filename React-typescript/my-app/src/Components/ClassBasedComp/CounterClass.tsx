import React, { Component } from 'react';

// Define the props interface
interface CounterProps {
  initialValue: number;
}

// Define the state interface
interface CounterState {
  count: number;
}

// Define the class-based component
class CounterClass extends Component<CounterProps, CounterState> {
  // Initialize state using the constructor
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialValue,
    };
  }

  // Function to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Function to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
