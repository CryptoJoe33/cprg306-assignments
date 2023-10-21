"use client";
import { useState } from "react";
import Items from "./item.js";

export default function Sorting({items, onItemSelect}){
  
  const [sortBy, setSortBy] = useState("name");

    if (sortBy === "name") {
        items.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (sortBy === "category") {
        items.sort((a, b) => {
          return a.category.localeCompare(b.category);
        });
      } else {
          return;
      }

    return (
        <div>
            <button onClick={() => setSortBy("name")} className = {` p-1 m-2 rounded-md ${sortBy === "name" ? "bg-green-500" : "bg-orange-700"}`} >Sort by Name</button>
            <button onClick={() => setSortBy("category")} className = {` p-1 m-2 rounded-md ${sortBy === "category" ? "bg-green-500" : "bg-orange-700"}`} >Sort by Category</button>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Items onSelect = {() => onItemSelect(item)} name={item.name} quantity={item.quantity} category={item.category}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
