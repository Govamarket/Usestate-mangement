import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../App";

//using hook state method to apply usecontext for simplify code

export const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user}- {channel}
    </div>
  );
};

export default ComponentE;
