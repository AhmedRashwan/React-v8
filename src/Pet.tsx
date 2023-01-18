import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Pet as PetType } from "./types/Pet";
const Pet = (props: any) => {
  const { name, animal, breed, images, location, id }: PetType = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <img src={hero} alt={name} className=" rounded-xl" />
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
