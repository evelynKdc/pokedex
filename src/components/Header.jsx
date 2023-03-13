import React from "react";
import { getPokeById } from "../helpers/getPokeById";

export const Header = ({ setData }) => {
  const handlerRandomPokemon = async () => {
    const number = Math.floor(Math.random() * (1010 - 1) + 1);
    const pokemonRandom = await getPokeById(number);
    setData(pokemonRandom);
  };
  return (
    <header className="bg-orange-light text-white flex justify-between items-center px-2 md:px-7 py-2 fixed w-screen top-0 z-50">
      <h1 className="text-2xl font-bold">PokePoke</h1>
      <button
        className="px-4 py-2 bg-orange-dark rounded-3xl md:px-6 md:py-3 hover:bg-orange-hover hover:shadow-md"
        onClick={handlerRandomPokemon}
      >
        Random
      </button>
    </header>
  );
};
