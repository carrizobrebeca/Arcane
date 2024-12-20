import data from "../../data";

import ContCard from "./ContCard";
const Card = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <ContCard />

        {data.map((character) => (
          <div
            key={character.id}
            className="relative flex justify-center h-72 w-36 object-cover p-2 box-content border-4"
            style={{
              borderImage:
                "linear-gradient(45deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.1))",
              borderImageSlice: 1,
            }}
          >
            <div
              className="h-72 w-36 object-cover p-2 box-content border-2"
              style={{
                borderImage:
                  "linear-gradient(45deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.1))",
                borderImageSlice: 1,
              }}
            >
              <img
                src={character.image.src}
                alt={character.name}
                className="h-64 w-36 object-cover"
              />
              <button className="text-orange-300">{character.name}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
