"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page(){

    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    function handleItemSelect(items){
        setSelectedItemName(selectedItemName)
    }

    function handleAddItem(newItem){
        setItems((prevItems) => {
            return [newItem, ...prevItems];
        });
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList onItemSelect = {handleItemSelect} items = {items}/>
            <MealIdeas ingredient = {selectedItemName}/>
        </main>
    );
}