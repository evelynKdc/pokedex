import React, { useState } from "react";
import { getPokeById } from "../helpers/getPokeById";

export const PokeForm = ({ setData }) => {
  const [poke, setPoke] = useState("");

  const handlerChangePoke = (e) => {
    setPoke(e.target.value);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const pokemonResult = await getPokeById(poke);
    console.log(pokemonResult);
    setData(pokemonResult);
  };

  return (
    <div className="bg-yellow-light flex flex-col items-center justify-center h-72 w-full mt-8">
      <form
        onSubmit={handlerSubmit}
        className="flex justify-center items-center flex-col gap-4 w-full"
      >
        <input
          type="text"
          onChange={handlerChangePoke}
          value={poke}
          required
          placeholder="Ingrese un id o nombre"
          className="bg-yellow-super-light px-6 py-4 rounded-full w-10/12 focus:outline-none focus:shadow-sm"
        />
        <button
          type="submit"
          className="bg-orange-dark rounded-3xl px-6 py-3 text-white hover:bg-orange-hover hover:shadow-md"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};
