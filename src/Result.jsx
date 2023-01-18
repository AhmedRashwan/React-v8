import Pet from "./Pet";

export const Result = ({ pets }) => {
  if (!pets?.length) {
    return "";
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {!pets?.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              className="rounded-lg text-right shadow-lg"
              name={pet.name}
              id={pet.id}
              animal={pet.animal}
              breed={pet.breed}
              location={`${pet.city}, ${pet.state}`}
              images={pet.images}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};
