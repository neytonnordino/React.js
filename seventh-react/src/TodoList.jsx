import { useState } from "react";

export default function TodoList() {
  const [item, setItem] = useState([]);

  function addItem(formData) {
    const newItem = formData.get("item");
    setItem((prevItem) => [...prevItem, newItem]);
  }

  function removeItem(indexremove) {
    setItem((prevItem) => prevItem.filter((_, index) => index !== indexremove));
  }

  const listItems = item.map((i, index) => (
    <>
      <li key={index}>{i}</li>
      <button onClick={() => removeItem(index)}>remover</button>
    </>
  ));
  return (
    <section>
      <form action={addItem}>
        <input type="text" name="item" />
        <button>Add item</button>
      </form>
      <ul>{listItems}</ul>
    </section>
  );
}
