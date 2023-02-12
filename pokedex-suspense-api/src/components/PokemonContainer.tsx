import { FC, Suspense } from "react";
import Pokedex from "./Pokedex";

const PokemonContainer: FC = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Pokedex />
    </Suspense>
  );
};

export default PokemonContainer;
