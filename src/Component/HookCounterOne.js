import React, { useState, useEffect } from "react";

// Use effect pattern

const HookCounterOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} time`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click to count: {count}
      </button>
    </div>
  );
};

export default HookCounterOne;
