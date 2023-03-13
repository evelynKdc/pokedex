import React from "react";

export const PokemonCard = ({ item }) => {
  return (
    <div className="w-9/12 rounded-xl shadow-lg mt-4 h-80 bg-blue-light flex flex-col p-0 justify-between sm:w-96 md:w-80  hover:shadow-2xl">
      <span className="bg-green-light text-white w-9 h-10 flex items-center justify-center rounded-b-xl absolute z-10 ml-4">
        {item.id}
      </span>

      <img src={item.sprites.front_default} alt={item.name} className="h-3/5" />

      <div className="p-6 bg-white rounded-tr-3xl rounded-b-xl">
        <h3 className="text-center text-xl font-medium uppercase">
          {item.name}
        </h3>
        <p>Experiencia: {item.base_experience} </p>
        <p>Peso: {item.weight}</p>
      </div>
    </div>
  );
};
