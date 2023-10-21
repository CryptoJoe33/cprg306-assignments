"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(){
        const randomMeal = await fetchMealIdeas(ingredient);
        setMeals(randomMeal);
    }

    useEffect(() => {loadMealIdeas()}, []);

    return (
        <main>
            <div>
                <h1>Meal Ideas</h1>
                <li>
                    {meals && Object.keys(meals).map((meals) => (<option key = {meals} value = {meals}>{meals}</option>))};
                </li>
            </div>
        </main>
    )
}

async function fetchMealIdeas(){
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}');
    const data = await response.json();
    return data.message;
}