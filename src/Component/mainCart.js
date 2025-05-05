import React, { useState } from "react";

const MainCart = () => {
  const [items, setItems] = useState([""]);
  const [setCurrentItem, currentItem] = useState("");

  const addOne = () => {
    setItems([...items, setCurrentItem]);
    currentItem("");
  };

  // Try using cart on edit and delete item
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  //

  return (
    <div className="container">
      <section className="section">
        <input
          type="text"
          placeholder="items"
          value={setCurrentItem}
          onChange={(e) => currentItem(e.target.value)}
        />
        <button onClick={() => currentItem(addOne)}>AddItem</button>
      </section>
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            <span style={{ width: "40%" }}>{item}</span>
            <button onClick={() => editItem(index, prompt("edit item", item))}>
              edit
            </button>
            <button onClick={() => deleteItem(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainCart;
