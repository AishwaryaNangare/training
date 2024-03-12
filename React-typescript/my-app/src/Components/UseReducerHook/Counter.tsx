import React, { useReducer } from 'react';

// Define the type for the state
type CounterState = {
  count: number;
};

// Define the type for the action
type CounterAction =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };

// Define the initial state
const initialState: CounterState = {
  count: 0,
};

// Define the reducer function
const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

// Component using useReducer
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</button>
    </div>
  );
};

export default Counter;
