import React, { useState } from "react";
import Item from "./Item"
import Filter from "./Filter"

function ShoppingList({ items,isDarkMode}) {
    const [selectedCategory, setSelectedCategory] = useState("All");

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
    function onCategoryChange(event) {
      setSelectedCategory(event.target.value);
    }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <Filter onCategoryChange={onCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
