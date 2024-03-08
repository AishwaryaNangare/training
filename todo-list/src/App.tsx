import React from 'react';

import './App.css';
import Todo from './components/Todo';
import CalculatorCli from './components/CalculatorCli';



function App() {
  
  return (
    <div className="App">
      <Todo Header='TodoList'/>
      <CalculatorCli/>
    </div>
  );
}

export default App;
