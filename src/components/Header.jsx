import React from 'react'
import { getPokeById } from "../helpers/getPokeById";

export const Header = ({setData}) => {

  const handlerRandomPokemon = async ()=>{
    const number = Math.floor(Math.random()*(1010-1)+1);
    const pokemonRandom = await getPokeById(number);
    setData(pokemonRandom);
  }
  return (

    <header className='bg-orange-light text-white flex justify-between items-center px-7 py-2 fixed w-screen top-0'>
        <h1 className='text-2xl font-bold'>PokePoke</h1>
        <button className='bg-orange-dark rounded-3xl px-6 py-3 hover:bg-orange-hover hover:shadow-md' onClick={handlerRandomPokemon}>Random</button>
    </header>
  )
}
