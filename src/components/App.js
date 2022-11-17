import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header'
import {useState} from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function onDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }
  return (
    <>
    <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick}/>
    <ShoppingList items={itemData} isDarkMode={isDarkMode} />
   </>
  )
}

export default App
