import Pet from "./Pet";

export const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
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
