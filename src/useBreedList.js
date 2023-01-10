import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

const useBreedList = (animal) => {
  
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds || [], results.status];
};

export default useBreedList;
// import { useEffect, useState } from "react";

// const localCache = {};

// export default function useBreedsList(animal) {
//   const [breeds, setBreeds] = useState([]);
//   const [status, setStatus] = useState(Status.UNLOADED);

//   useEffect(() => {
//     if (!animal) {
//       setBreeds([]);
//     } else if (localCache[animal]) {
//       setBreeds(localCache[animal]);
//     } else {
//       requestBreedsList();
//     }
//     async function requestBreedsList() {
//       setBreeds([]);
//       setStatus(Status.LOADING);
//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//       );
//       const json = await res.json();
//       localCache[animal] = json.breeds;
//       setBreeds(localCache[animal]);
//       setStatus(Status.LOADED);
//     }
//   }, [animal]);
//   return [breeds, status];
// }

// const Status = {
//   UNLOADED: "Unloaded",
//   LOADING: "Loading",
//   LOADED: "Loaded",
// };
