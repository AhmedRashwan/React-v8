import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "./AppContext";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);
  const context = useContext(AppContext);

  if (result.isLoading) return <h2>Loading...</h2>;

  console.log({ context });
  const pet = result.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
