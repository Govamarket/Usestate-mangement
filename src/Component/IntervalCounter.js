import React, { useEffect, useState } from "react";

// UseEffect incorrect dependency
const IntervalCounter = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <span style={{ fontSize: "100px" }}>{count}</span>
    </div>
  );
};

export default IntervalCounter;
