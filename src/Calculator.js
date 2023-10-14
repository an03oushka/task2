import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="top-blue-box">
        <div className="dot"></div>
        <div className="dot bigger-dot"></div>
      </div>
      <div className="screen">
        {display}
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={backspace}>
          &#8592;
        </button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('/')}>
          &#247;
        </button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('*')}>
          &#215;
        </button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="equals" onClick={calculateResult}>=</button>
        <button className="operator" onClick={() => handleClick('-')}>
          &#8722;
        </button>
        <button
          className="operator"
          style={{ borderRadius: '9%' }}
          onClick={() => handleClick('+')}
        >
          &#43;
        </button>
        <button className="clear" onClick={clearDisplay}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
