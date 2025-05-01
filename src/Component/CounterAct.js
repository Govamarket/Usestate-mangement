import { useState } from "react";

const CounterAct = () => {
  const [stateCount, setCount] = useState(0);

  function onAdd() {
    setCount(stateCount + 1);
  }
  return (
    <div>
      <button onClick={onAdd}>{stateCount}</button>
    </div>
  );
};

export default CounterAct;
