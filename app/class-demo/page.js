"use client";
import { useState, useEffect } from "react"; //running from browser

async function fetchRandomDog(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    const data = await response.json();

    return data.message
}

async function fetchBreedList(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    return data.message;
}

export default function Page(){
    const [dog, setDog] = useState(null);
    const [breedList, setBreedList] = useState(null);

    async function loadRandomDog(){
        const randomDog = await fetchRandomDog();
        setDog(randomDog);
    }

    async function loadBreedList(){
        const breedList = await fetchBreedList();
        setBreedList(breedList);
    }

    useEffect(() => {loadRandomDog(), loadBreedList()}, []);

    loadRandomDog();

    return(
        <div>
            <h1>Class Demo</h1>
            <div><img src = {dog}></img></div>
            <div>
                <select name = "breed">
                    {breedList && Object.keys(breedList).map((breed) => (<option key = {breed} value = {breed}>{breed}</option>))};
                </select>
            </div>
        </div>
    )
}