import { useParams, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { useDispatch } from "react-redux";
import { adopt } from "./AdoptedPetSlice";
import { useGetPetQuery } from "./PetApiService";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, data: pet } = useGetPetQuery(id);
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="w-64  bg-gray-600 ">
      <Carousel images={pet.images} className="rounded-t" />
      <div className=" m-10 text-center">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button
          className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50"
          onClick={() => {
            dispatch(adopt(pet));
            navigate("/");
          }}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
