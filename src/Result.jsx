import Pet from "./Pet";

export const Result = ({ pets }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet className="rounded-lg shadow-lg text-right"
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
