import { PokemonCard } from "./PokemonCard";
export const MapeoPokemons = ({ initialPokemons }) => {
  return (
    <>
      <h2 className="text-2xl font-medium text-blue-dark w-full text-center">
        Algunos pokemones
      </h2>

      {initialPokemons
        ? initialPokemons.map((item) => (
            <PokemonCard key={item.order} item={item} />
          ))
        : "Loading....."}
    </>
  );
};
