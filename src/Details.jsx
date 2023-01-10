import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
const Details = () => {
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);
  if (result.isLoading) return <h2>Loading...</h2>;

  const pet = result.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} test="2123" />
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
