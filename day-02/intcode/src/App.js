import React from 'react';
import logo from './logo.svg';
import './App.css';

const ADD = 1;
const MULTIPLY = 2;
const END = 99;
const INSTRUCTION_LENGTH = 4;

const pgm1 = [1,0,0,0,99]; // 2,0,0,0,99
const pgm2 = [2,3,0,3,99]; // becomes 2,3,0,6,99 (3 * 2 = 6).
const pgm3 = [2,4,4,5,99,0]; // becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
const pgm4 = [1,1,1,4,99,5,6,0,99]; // becomes 30,1,1,4,2,5,6,0,99.

const myInput = [
  1,0,0,3,
  1,1,2,3,
  1,3,4,3,
  1,5,0,3,
  2,6,1,19,
  1,19,10,23,
  2,13,23,27,
  1,5,27,31,
  2,6,31,35,
  1,6,35,39,
  2,39,9,43,
  1,5,43,47,
  1,13,47,51,
  1,10,51,55,
  2,55,10,59,
  2,10,59,63,
  1,9,63,67,
  2,67,13,71,
  1,71,6,75,
  2,6,75,79,
  1,5,79,83,
  2,83,9,87,
  1,6,87,91,
  2,91,6,95,
  1,95,6,99,
  2,99,13,103,
  1,6,103,107,
  1,2,107,111,
  1,111,9,0,
  99,
  2,14,0,0];

const executeOperator = (program, position) => {
  const operator = program[position];
  const operand1 = program[program[position + 1]];
  const operand2 = program[program[position + 2]];
  const outputLocation = program[position +3];

  switch (operator) {
    case ADD:
      program[outputLocation] = operand1 + operand2;
      break;

    case MULTIPLY:
      program[outputLocation] = operand1 * operand2;
      break;

    default:
      alert('1202 prgram alarm');
      break;
  }
}

const runProgram = (program) => {
  let position = 0;

  while(program[position] !== END) {
    executeOperator(program, position);
    position += INSTRUCTION_LENGTH;
  }
}

const Output = (props) => {
  return (
    <h3>{ props.ram.join(', ') }</h3>
  );  
}

function App() {

  const pgm = myInput;

  // Restore from bad state (see instructions)
  pgm[1] = 12;
  pgm[2] = 2;

  runProgram(pgm);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Output ram={ pgm }/>
      </header>
    </div>
  );
}

export default App;
