"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import ItemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page(){

    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleItemSelect = (selectedItem) => {
        const fullName = selectedItem.name.split(",")[0].trim().replace(/[^\w\s]/gi, "");
        setSelectedItemName(fullName);
    }

    function handleAddItem(newItem){
        setItems((prevItems) => {
            return [newItem, ...prevItems];
        });
    }

    return (
        <main>
            <div className="flex justify-center w-full md:w-3/4 lg:w-2/3 gap-4">
                <div className="bg-black opacity-90 p-6 rounded-md shadow-md w-full border border-gray-400">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="bg-black p-6 rounded-md shadow-md w-full border border-gray-400">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}