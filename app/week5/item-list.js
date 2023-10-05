"use client";
import { useState } from "react";
import Item from "./items.json";
import Items from "./item.js";

export default function Sorting(){
  
  const [sortBy, setSortBy] = useState("name");

    if (sortBy === "name") {
        Item.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (sortBy === "category") {
        Item.sort((a, b) => {
          return a.category.localeCompare(b.category);
        });
      } else {
          return;
      }

    return (
        <div>
            <button style = {{ backgroundColor: sortBy === 'name' ? "blue" : "white"  }} onClick={() => setSortBy("name")}>Sort by Name</button>
            <button style = {{ backgroundColor: sortBy === 'category' ? "blue" : "white"  }} onClick={() => setSortBy("category")}>Sort by Category</button>

            <ul>
                {Item .map((item) => (
                    <li key={item.id}>
                        <Items name={item.name} quantity={item.quantity} category={item.category}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
