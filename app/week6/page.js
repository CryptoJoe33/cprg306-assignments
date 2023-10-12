"use client";

import { useState } from "react";
import ItemList from "./item-list.js"
import NewItem from "./new-item.js"
import ItemsData from "./items.json"

export default function Page(){

    const [items, setItems] = useState(ItemsData);

    function handleAddItem(newItem){
        setItems((prevItems) => {
            return [newItem, ...prevItems];
        });
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items = {items}/>
        </main>
    );
}