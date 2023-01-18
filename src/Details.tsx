import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import { Pet } from "./types/Pet";
const Details = () => {
  const { id } = useParams();
  const result = useQuery<Pet[]>(["details", id], fetchPet);
  const context = useContext(AppContext);

  if (result.isLoading) return <h2>Loading...</h2>;

  console.log({ context });
  const pet: Pet = result?.data?.pets[0];
  if (!pet) {
    return <h2>Not Found</h2>;
  }
  return (
    <div className="w-64  bg-gray-600 ">
      <Carousel images={pet.images} className="rounded-t" />
      <div className=" m-10 text-center">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
