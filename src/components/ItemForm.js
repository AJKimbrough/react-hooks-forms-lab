import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("")
  const [categorySelection, setCategorySelection] = useState("Produce")
  const [addItem, setAddItem] = useState([])

  function onChangeCategory(event) {
    setCategorySelection(event.target.value)
  }

  function onAddItem(e) {
    setAddItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id:uuid(),
      name:addItem,
      category:categorySelection,
    }
    console.log("this is new item",newItem)
    onItemFormSubmit(newItem)
  }

  function handleName(event) {
    setName(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input value= {addItem} type="text" name="name" onChange={onAddItem} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onChangeCategory} >
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
