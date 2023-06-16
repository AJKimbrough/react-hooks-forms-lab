import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ addItem }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleName(event) {
    setName(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name,
      category
    };
    addItem(newItem)
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input value= {name} type="text" name="name" onChange={handleName} />
      </label>

      <label>
        Category:
        <select value={category} name="category" onChange={handleCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
