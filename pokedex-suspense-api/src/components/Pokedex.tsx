import { FC, Suspense } from "react";
import useSWR from "swr";
import Pokemon from "./Pokemon";

const Pokedex: FC = () => {
  const {
    data: { results },
  } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=150");

  return (
    <>
      {results.map((pokemon: { name: string }) => (
        <Suspense fallback={<p>{"Loading <Pokedex />..."}</p>}>
          <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
        </Suspense>
      ))}
    </>
  );
};

export default Pokedex;
