"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(){
        const randomMeal = await fetchMealIdeas(ingredient);
        setMeals(randomMeal);
    }

    useEffect(() => {loadMealIdeas()}, [ingredient]);

    return (
        <main>
            <div>
                <h1>Meal Ideas</h1>
                <ul>
                    {meals && meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h2>{meal.strMeal}</h2>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

async function fetchMealIdeas(ingredient){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}
