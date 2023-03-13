import { getPokeById } from "./getPokeById";
export async function getInitialPokemons() {
  try {
    const initialPokemons = [];
    for (let index = 1; index < 10; index++) {
      const dataIterator = await getPokeById(index);

      initialPokemons.push(dataIterator);
    }
    return initialPokemons;
  } catch (error) {
    console.log(error);
  }
}
