import React from "react";

export const PokemonData = ({ data }) => {
  return (
    <div>
      {data && <img src={data.sprites.front_default} alt={data.name} />}
      {data && data.name}
    </div>
  );
};
