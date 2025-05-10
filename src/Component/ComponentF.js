import React from "react";
import { useContext, channelContext } from "../App";
export const ComponentF = () => {
  return (
    <div>
      <useContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                );
              }}
              {/* <div>User context value {user}</div> */}
            </channelContext.Consumer>
          );
        }}
      </useContext.Consumer>
    </div>
  );
};

export default ComponentF;
