import React, { UseContext } from "react";
import "./App.css";
import Home from "./Component/Home";
import ComponentC from "./Component/ComponentC";

export const UseContext = React.createContext();
export const ChannelContext = React.createContext(); //consuming multiple content value

function App() {
  return (
    <div>
      <Home />
      <UseContext.Provider value={"Clinton"}>
        <ChannelContext.Provider value={"Code Evalution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UseContext.Provider>
    </div>
  );
}

export default App;
