import { useState } from "react";
import Item from "./item";

const [sortBy, setSortBy] = useState("name");

export default function Sorting(){
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
            <button style = {{ backgroundColor: sortBy === 'name' ? "blue" : "white"  }} onClick={() => sortBy("name")}>Sort by Name</button>
            <button style = {{ backgroundColor: sortBy === 'name' ? "blue" : "white"  }} onClick={() => sortBy("category")}>Sort by Category</button>

            <ul>
                {Item.map((item) => (
                    <li key={item.id}>
                        <Item name={item.name} quantity={item.quantity} category={item.category}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};




