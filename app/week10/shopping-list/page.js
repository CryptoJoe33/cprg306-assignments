"use client";

import { useState, useUserAuth, useEffect } from "react";
import ItemList from "./item-list.js"
import NewItem from "./new-item.js"
import {getItems, addItem} from ".._services/shopping-list-service.js"
import MealIdeas from "./meal-ideas.js"

export default function Page(){

    const [items, setItems] = useState(ItemsData);
    const [selectedItemName, setSelectedItemName] = useState([]);
    const [user] = useUserAuth();

    const handleItemSelect = (selectedItem) => {
        const cleanedName = selectedItem.name.split(',')[0].trim().replace(/[^\w\s]/gi, "");
        setSelectedItemName(cleanedName);
    };

    function handleAddItem(newItem){
        addItem(user.uid, newItem);
        setItems((prevItems) => {
            return [newItem, ...prevItems];
        });
    }

    async function loadItems(){
        const items = await getItems(user.uid);
        setItems(items);
    }

    useEffect(() => {
        if(user){
            loadItems();
        }
    }, [user]);

    return (
        <main>
            (!user && <h1>Sign in to View Week 8</h1>)
            (user &&
                <div className="flex justify-center w-full md:w-3/4 lg:w-2/3 gap-4">
                    <div className="bg-black opacity-90 p-6 rounded-md shadow-md w-full border border-gray-400">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>

                    <div className="bg-black p-6 rounded-md shadow-md w-full border border-gray-400">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            )
        </main>
    );
}