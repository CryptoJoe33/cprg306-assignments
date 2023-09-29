"use client"

import { useState } from "react"

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting ${name} ${quantity} ${category}`);

        const newItem = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log(name, quantity, category);

        setName("");
        setQuantity(0);
        setCategory("Produce");

    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };


    return (
    <main>
        <div>
            <div className="text-black m-4">
                <form onSubmit={handleSubmit}/>
            </div>
    
            <div className="text-black m-4">
                <input className=" focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                type="text" 
                placeholder="Enter item name"
                value={name} 
                onChange = {handleNameChange}
                />      
            </div>

            <div className=" text-black m-4">
                <input className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                type="number" 
                placeholder="Enter quantity"
                value={quantity} 
                onChange = {handleQuantityChange}
                />
            </div>
            
            <div className=" text-black m-4">
                <select className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={handleCategoryChange}
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            
            <div >
                <button onClick={handleSubmit} className="text-black m-4 border-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded">Submit</button>
            </div>
        </div>
    </main>
    )
};