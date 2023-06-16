import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foodSearch, setFoodSearch] = useState("")

  function handleFoodSearch(event) {
    setFoodSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsSearchArray = items.filter((item) => {
    if(foodSearch !== ""){
      return item.name.toLowerCase().includes(foodSearch.toLowerCase())
    } else {
      return item
    }

  })

  const itemsToDisplay = itemsSearchArray.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  console.log(itemsSearchArray)

  return (
    <div className="ShoppingList">
      <ItemForm addItem={addItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleFoodSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
