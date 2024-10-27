"use client"


import React, { useState, useEffect } from 'react';

async function getRandomDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
}

async function getDogBreed() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    return Object.keys(data.message);
}

export default function Page() {
    const [dogUrl, setDogUrl] = useState(null);
    const [breeds, setBreeds] = useState([]);
    const[selectedBreed, setSelectedBreed] = useState("");

    const loadRandomDog = async () => {
        const url = await getRandomDog();
        setDogUrl(url);
    };

    const loadBreeds = async () =>{
        const breeds = await getDogBreed();
        setBreeds(breeds);
    }

    const getBreedImage = async(breed) => {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        return data.message;

    }

    const loadBreedImage = async(breed) => {
        const breedImage = await getBreedImage(breed);
        setDogUrl(breedImage);
    }
    useEffect(() => {
        loadRandomDog();
        loadBreeds();
    }, []);

    useEffect(() => {
        if(selectedBreed == "") return;
        loadBreedImage(selectedBreed);
    }, [selectedBreed]);
   

    return(
        <main>
            <h1>Week 7</h1>
            <p>Random dog</p>
            <img src={dogUrl} alt="random dog" />
            <select  className="text-black" value={selectedBreed}
            onChange = {(e) => setSelectedBreed(e.target.value)}>
                {breeds.map((breed, index) => (
                    <option key={breed} value={breed}>{breed}</option>
                ))}
            </ select>
        </main>
    )
}