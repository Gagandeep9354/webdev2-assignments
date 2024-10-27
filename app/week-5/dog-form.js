"use client"

import React, { useState } from 'react';


export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    return(
        <div className="m-2">
            <h2 className="text-2xl">Add a Dog</h2>
            <form className="m-2">
                <label htmlFor="name" >Name:</label>
                <input
                id="name"
                type="text"
                value = {name}
                onChange={(event) => {setName(event.target.value)}} />
            </form>
        </div>
    )
}