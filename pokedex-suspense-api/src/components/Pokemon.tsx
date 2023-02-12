import { FC } from "react";
import useSWR from "swr";

type Props = {
  pokemonName: string;
};

const Pokemon: FC<Props> = ({ pokemonName }: Props) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (error || data.error) {
    return <div />;
  }

  if (!data) {
    return <p>{"Loading <Pokemon />..."}</p>;
  }

  const { id, name, sprites, types } = data;
  const pokemonTypes = types.map((pokemonType: any) => pokemonType.type.name);

  return (
    <>
      <header>
        <h2>{name}</h2>
        <p>#{id}</p>
        <img src={sprites.front_default} alt={`${name}`} />
      </header>
      {pokemonTypes.map((pokemonType: string) => (
        <p key={pokemonType}>{pokemonType}</p>
      ))}
    </>
  );
};

export default Pokemon;
