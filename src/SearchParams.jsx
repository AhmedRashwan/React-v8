import React from "react";
import { useState } from "react";
const ANIMALS = ["cat", "Dog", "Bird"];
const BREEDS = [""];
let counter = 1;
export const SearchParams = () => {
  counter++;
  const [location, setLocation] = useState("Egypt, ca");
  const [animal, setAnimal] = useState("");
  return (
    <div className="search-params">
      <h1>{counter}</h1>
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="location"
        />
        <label htmlFor="animals">Animals</label>
        <select
          name="animals"
          id="animals"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option key="select animal">Select Animal</option>
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>

        <label htmlFor="breeds">Breeds</label>
        <select
          name="breeds"
          id="breeds"
          value={animal}
          onChange={(e) => setBreed(e.target.value)}
          disabled={BREEDS.length === 0}
        >
          <option key="select breed">Select Breed</option>
          {BREEDS.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
