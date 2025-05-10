import React from "react";
import "./App.css";
import Home from "./Component/Home";
import ComponentC from "./Component/ComponentC";

export const useContext = React.createContext();
export const channelContext = React.createContext(); //consuming multiple content value

function App() {
  return (
    <div>
      <Home />
      <useContext.Provider value={"Clinton"}>
        <channelContext.Provider value={"Code Evalution"}>
          <ComponentC />
        </channelContext.Provider>
      </useContext.Provider>
    </div>
  );
}

export default App;
