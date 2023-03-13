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
    <form onSubmit={handlerSubmit}>
      <input type="text" onChange={handlerChangePoke} value={poke} />
      <button type="submit">Buscar</button>
    </form>
  );
};
