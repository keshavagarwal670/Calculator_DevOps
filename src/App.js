import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setDisplay(result);
        setExpression(result.toString());
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else if (value === 'log') {
      setExpression(expression + 'Math.log(');
      setDisplay(display + 'log(');
    } else if (value === 'pow') {
      setExpression(expression + '**');
      setDisplay(display + '^');
    } else {
      setExpression(expression + value);
      if (display === '0' || display === 'Error') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={display} disabled />
      <div className="buttons">
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('log')}>log</button>
        <button onClick={() => handleClick('pow')}>^</button>
      </div>
    </div>
  );
}

export default App;
