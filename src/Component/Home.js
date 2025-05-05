import React, { createContext, useContext, useState } from "react";
import { create } from "zustand";
import CounterAct from "./CounterAct";
import HookCounter from "./HookCounter";
import HookCounterTwo from "./HookCounterTwo";
import HookCounterThree from "./HookCounterThree";
import HookCounterFour from "./HookCounterFour";
import HookCounterOne from "./HookCounterOne";
import MouseContainer from "./MouseContainer";
import MainCart from "./mainCart";
import IntervalCounter from "./IntervalCounter";
import DataFetching from "./DataFetching";

// Usestate methods

function NameList() {
  const [list, setList] = useState(["Jack", "John", "Jill"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    // list.push(name);
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <section>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button onClick={() => setName(onAddName)}>Submit</button>
      </section>
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(10);
  // const [startCount, initiaCount] = useState(0);

  function addOne() {
    setCount(count - 1);
  }
  return (
    <div>
      <section className="App">
        <button onClick={addOne}>Count = {count}</button>
      </section>

      {/* <button onClick={() => initiaCount(startCount + 1)}>
        Start ={startCount}
      </button> */}
    </div>
  );
};

// Zustand method
/*External State Management (Redux, Zustand, Jotai)
For large-scale apps, external libraries provide better performance and dev tools.

When to Use Redux/Zustand/Jotai
✅ Best for:

Enterprise apps with complex state

When you need time-travel debugging (Redux)

Optimized performance for frequent updates
*/

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function CounterOne() {
  const { count, increment } = useStore();
  return <button onClick={increment}>✅:{count}</button>;
}

function Home() {
  return (
    <div className="content">
      <Counter />
      <NameList />
      <onAddName />
      <CounterOne />
      <CounterAct />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterOne />
      <MouseContainer />
      <MainCart />
      <IntervalCounter />
      <DataFetching />
    </div>
  );
}

export default Home;
