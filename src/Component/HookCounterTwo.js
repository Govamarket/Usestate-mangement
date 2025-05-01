import React, { useState } from "react";

// Using state in the previous use state method

const HookCounterTwo = () => {
  const initiaCount = 0;
  const [count, setCount] = useState(initiaCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initiaCount)}>Rest</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default HookCounterTwo;
