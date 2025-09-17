import React, { useState, useCallback, useMemo } from 'react';
import ChildComponent from './childComponent';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={handleClick}>Increment Count</button>
      <ChildComponent handleClick={handleClick} buttonName="Increment from Child" />
    </div>
  );
};

export default ExpensiveComponent;