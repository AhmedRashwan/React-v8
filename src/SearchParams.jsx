import { useState, useEffect } from "react";
import Pet from "./Pet";
const ANIMALS = ["cat", "dog", "bird"];
const BREEDS = [""];

let counter = 1;
export const SearchParams = () => {
  counter++;
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <h1>{counter}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
