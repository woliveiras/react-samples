import React from "react";
import { SWRConfig } from "swr";
import PokemonContainer from "./components/PokemonContainer";
import pokemonApi from "./services/pokemonApi";

function App() {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: pokemonApi,
          suspense: true,
        }}
      >
        <h1>Pokedex</h1>
        <PokemonContainer />
      </SWRConfig>
    </>
  );
}

export default App;
