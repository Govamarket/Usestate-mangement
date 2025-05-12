import React from "react";
import { UseContext, ChannelContext } from "../App";
export const ComponentF = () => {
  return (
    <div>
      <UseContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                );
              }}
              {/* <div>User context value {user}</div> */}
            </ChannelContext.Consumer>
          );
        }}
      </UseContext.Consumer>
    </div>
  );
};

export default ComponentF;
