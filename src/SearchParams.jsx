import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all } from "./SearchParamsSlice";
import { Result } from "./Result";
import { useGetBreedListQuery, useGetPetsQuery } from "./PetApiService";

const ANIMALS = ["cat", "dog", "bird"];

let counter = 1;
export const SearchParams = () => {
  counter++;
  const dispatch = useDispatch();
  const [animal, setAnimal] = useState();
  let { data: breeds } = useGetBreedListQuery(animal, {
    skip: !animal,
  });

  const searchParams = useSelector((state) => state.searchParams.value);
  const { data: pets } = useGetPetsQuery(searchParams);

  return (
    <div className="my-0 mx-auto w-11/12">
      <h3>{counter}</h3>
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          dispatch(all(obj));
        }}
      >
        <label className="item-left text-left " htmlFor="location">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="location"
          className="search-input"
        />
        <label htmlFor="animals">Animals</label>
        <select
          name="animal"
          id="animal"
          onChange={(e) => setAnimal(e.target.value)}
          className="search-input"
        >
          <option key="select animal">Select Animal</option>
          {ANIMALS?.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>

        <label htmlFor="breed">Breeds</label>
        <select
          className="search-input"
          name="breed"
          id="breed"
          disabled={breeds?.length === 0}
        >
          <option key="select breed">Select Breed</option>
          {breeds?.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
        <button
          className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
          type="submit"
        >
          Submit
        </button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
