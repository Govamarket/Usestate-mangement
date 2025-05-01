import React, { useState } from "react";

const HookCounter = () => {
  const [add, setAdd] = useState(100);

  return (
    <div>
      <button onClick={() => setAdd(add + 100)}>
        Start Adding by click::{add}
      </button>
    </div>
  );
};

export default HookCounter;
