import {useState} from 'react'
import { Header } from '../components/Header'
import { PokeForm } from '../components/PokeForm'
import { PokemonData } from '../components/PokemonData';

export const Home = () => {
    const [data, setData] = useState(null);

    
  return (
    <div>
        <Header setData={setData}/>
        <PokeForm setData={setData}/>
        <PokemonData data={data}/>
    </div>
  )
}
