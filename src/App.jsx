import { PokeForm } from "./components/PokeForm";
import { Home } from "./pages/Home";

function App() {
  

  const handlerPoke = async () =>{
    const poke = await getPokemon(2);
     console.log(poke.name);
  }
  return <div className="App font-body">
    <Home/>
    
    </div>
}

export default App;
