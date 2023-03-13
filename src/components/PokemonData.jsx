import React, { useEffect, useState } from "react";
import { getInitialPokemons } from "../helpers/getInitialPokemons";
import { PokemonCard } from "./PokemonCard";
import { MapeoPokemons } from "./MapeoPokemons";

export const PokemonData = ({ data }) => {
  const [initialPokemons, setInitialPokemons] = useState(null);

  const pokemons = async () => {
    const dato = await getInitialPokemons();
    setInitialPokemons(dato);
  };

  useEffect(() => {
    pokemons();
  }, []);

  return (
    <section className="w-full flex justify-center items-center flex-col py-8 md:flex-row md:gap-8 md:flex-wrap">
      {data ? (
        <PokemonCard item={data} />
      ) : (
        <MapeoPokemons initialPokemons={initialPokemons} />
      )}
    </section>
  );
};
