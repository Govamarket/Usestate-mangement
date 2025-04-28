import React, { useState } from "react";

// Usestate methods

function NameList() {
  const [list, setList] = useState(["Jack", "John", "Jill"]);
  const [name, setName] = useState("");

  const onAddName = () => {
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
  const [startCount, initiaCount] = useState(0);

  function addOne() {
    setCount(count - 1);
  }
  return (
    <div>
      <section className="App">
        <button onClick={addOne}>Count = {count}</button>
      </section>

      <button onClick={() => initiaCount(startCount + 1)}>
        Start ={startCount}
      </button>
    </div>
  );
};

function Home() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <NameList />
      <onAddName />
    </div>
  );
}

export default Home;
