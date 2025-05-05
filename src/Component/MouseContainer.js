import React, { useState } from "react";
import MouseHook from "./MouseHook";

// Use Effect with cleanup

const MouseContainer = () => {
  const [display, setDisply] = useState(true);
  return (
    <div>
      <button onClick={() => setDisply(!display)}>Toogle display</button>
      {display && <MouseHook />}
    </div>
  );
};

export default MouseContainer;
