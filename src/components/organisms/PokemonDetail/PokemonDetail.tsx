import React from "react";
import styles from "./PokemonDetail.module.scss";
import { UseFindByPokemonName } from "@/usecases/FindByPokemonName";

export type Props = {
  pokemonId: number;
};

export const PokemonDetail: React.FC<Props> = ({ pokemonId }) => {
  const { data, isLoading, species } = UseFindByPokemonName({
    pokemonId,
  });

  return (
    <div>
      <>
        <p>{!isLoading && species?.names[0].name}</p>
        <img
          src={
            data?.sprites.front_default ||
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png"
          }
          alt="aa"
        />
      </>
    </div>
  );
};
