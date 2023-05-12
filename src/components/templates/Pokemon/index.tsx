import React, { Suspense, useCallback, useState } from "react";
import styles from "./Pokemon.module.scss";
import { UseFindByPokemonName } from "@/usecases/FindByPokemonName";

type Props = {};

export const Pokemon: React.FC<Props> = () => {
  const [pokemonId, setPokemonId] = useState(331);
  const { data, isLoading } = UseFindByPokemonName({ pokemonId });

  const onChange = useCallback(
    (event: any) => setPokemonId(event.target.value),
    []
  );

  return (
    <main>
      <input type="text" onChange={onChange} />
      <p>{isLoading}</p>
      {!isLoading && (
        <>
          <img src={data.sprites.front_default} alt="aa" />
          <p>pokemonpage</p>
          <p>yaaa</p>
        </>
      )}
    </main>
  );
};
