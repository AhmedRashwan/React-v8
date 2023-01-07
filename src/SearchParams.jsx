import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchSearch from "./fetchSearch";
import { Result } from "./Result";
import useBreedList from "./useBreedList";
const ANIMALS = ["cat", "dog", "bird"];

let counter = 1;
export const SearchParams = () => {
  counter++;
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  console.log({ results });
  return (
    <div className="search-params">
      <h3>{counter}</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          console.log(obj);
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="location"
        />
        <label htmlFor="animals">Animals</label>
        <select
          name="animal"
          id="animal"
          onChange={(e) => setAnimal(e.target.value)}
        >
          <option key="select animal">Select Animal</option>
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>

        <label htmlFor="breed">Breeds</label>
        <select name="breed" id="breed" disabled={breeds.length === 0}>
          <option key="select breed">Select Breed</option>
          {breeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
